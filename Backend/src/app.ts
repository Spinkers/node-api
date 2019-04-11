import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/Routes";

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();

    constructor () {
        this.routePrv.routes(this.app);
        this.app = express();
        this.config();
    }

    private config (): void {
        this.app.use(bodyParser.json());

        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App() .app;