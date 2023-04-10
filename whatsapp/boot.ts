import SimpleMQ from "../vendor/SimpleMQ";
import { connectToWhatsApp } from "./baileys";

const whatsAppBoot = () => {
    const emitter = SimpleMQ;
    console.log("boot")
    emitter.on("request:connect", (botName) => {
        console.log("Connecting to " + botName);
        connectToWhatsApp(botName)
    });
}

export default whatsAppBoot;