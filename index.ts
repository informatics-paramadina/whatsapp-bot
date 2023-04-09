import appBoot from "./app/boot";
import whatsAppBoot from "./whatsapp/boot";


const bootStrap = () => {
    appBoot();
    whatsAppBoot();
}

bootStrap();