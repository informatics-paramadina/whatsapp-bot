import express, { Express } from "express";
import http, { Server as HttpServer } from "http"
import { Server as IoServer } from "socket.io";


class ExpressServer {
    private app: Express;
    private server: HttpServer;
    private io: IoServer;


    constructor() {
        this.app = express();
        this.server = http.createServer(this.app);
        this.io = new IoServer(this.server);
    }

    public getApp() {
        return this.app;
    }

    public createRoute() {
        return express.Router();
    }

    public getServer() {
        return this.server;
    }

    public getIo() {
        return this.io;
    }
}


export default new ExpressServer;