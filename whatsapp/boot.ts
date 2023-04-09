import EventEmitter from "events";
import TypedEmitter from "typed-emitter"
import EventTypes from "../types/eventTypes";
import SimpleMQ from "../vendor/SimpleMQ";
import { hostname } from "os";
import { connectToWhatsApp } from "./baileys";

const whatsAppBoot = () => {
    const emitter = SimpleMQ;
    console.log("boot")
    emitter.on("request:connect", (hostname) => {
        console.log("Connecting to " + hostname);
        connectToWhatsApp()
    });
}

export default whatsAppBoot;