import makeWASocket, { useMultiFileAuthState, fetchLatestBaileysVersion, DisconnectReason } from "@adiwajshing/baileys"
import { Boom } from "@hapi/boom"

const connectToWhatsApp = async (botName: string) => {
    const { state, saveCreds } = await useMultiFileAuthState("sessions/" + botName)
    const { version, isLatest } = await fetchLatestBaileysVersion()
    console.log(`using WA v${version.join('.')}, isLatest: ${isLatest}`)

    const sock = makeWASocket({
        version,
        printQRInTerminal: true,
        auth: {
            creds: state.creds,
            keys: state.keys
        },
        generateHighQualityLinkPreview: true,
    })

    sock.ev.process(async (events) => {
        if (events['connection.update']) {
            const update = events['connection.update']
            const { connection, lastDisconnect } = update
            if (connection === 'close') {
                // reconnect if not logged out
                if ((lastDisconnect?.error as Boom)?.output?.statusCode !== DisconnectReason.loggedOut) {
                    connectToWhatsApp(botName)
                } else {
                    console.log('Connection closed. You are logged out.')
                }
            }

            console.log('connection update', update)
        }

        // credentials updated -- save them
        if (events['creds.update']) {
            await saveCreds()
        }
    })

}

export {
    connectToWhatsApp
}