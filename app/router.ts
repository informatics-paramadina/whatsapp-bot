import ExpressServer from "../vendor/v_express";
import botHandler from "./handler/api/botHandler";

const baseRoute = ExpressServer.createRoute();

baseRoute.get("/", botHandler.get);


export default baseRoute;