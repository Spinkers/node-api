import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/Routes";

class App {

    public app: express.Application;
    public routePrv: Routes;
    public mongoUrl: String;

    constructor () {
        this.app = express();
        this.config();
        this.routePrv = new Routes();
        this.routePrv.routes(this.app);
        this.mongoUrl = 'mongodb://localhost:27017/NodeApi';
        this.mongoSetup();
      
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }

    private config (): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App() .app;