import { Request, Response } from "express"
import BaseHandler from "./baseHandler"
import SimpleMQ from "../../../vendor/SimpleMQ";

class BotHandler extends BaseHandler {
    public async get(req: Request, res: Response) {
        SimpleMQ.emit("request:connect", "localhost");
        res.send("Hello Worlds!")
    }
}

export default new BotHandler();