import { createRoute } from "../vendor/v_express";
import botHandler from "./handler/botHandler";

const baseRoute = createRoute();

baseRoute.get("/", botHandler.get);


export default baseRoute;