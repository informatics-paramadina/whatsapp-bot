import { createApp } from "../vendor/v_express";
import baseRoute from "./router";

const app = createApp();
const port = process.env.PORT || 3000;

const appBoot = () => {
    app.use(baseRoute);


    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    })
}

export default appBoot;