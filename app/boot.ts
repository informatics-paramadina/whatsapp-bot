import ExpressServer from "../vendor/v_express";
import wsHandler from "./handler/ws/wsHandler";
import baseRoute from "./router";
const port = process.env.PORT || 3000;

const appBoot = () => {
    const app = ExpressServer.getApp();
    app.use(baseRoute);

    const io = ExpressServer.getIo();
    io.on("connection", (socket) => {
        wsHandler(socket)
    });

    const server = ExpressServer.getServer();
    server.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });


}

export default appBoot;