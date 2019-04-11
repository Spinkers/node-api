import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { ContatoRoutes } from "./routes/ContatoRoutes";

class App {

    public app: express.Application;
    public routePrv: ContatoRoutes;
    public mongoUrl: String;

    constructor () {
        this.app = express();
        this.config();
        this.routePrv = new ContatoRoutes();
        this.routePrv.routes(this.app);
        this.mongoUrl = 'mongodb://localhost:27017/NodeApi';
        this.mongoSetup();
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }

    private config (): void {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App() .app;