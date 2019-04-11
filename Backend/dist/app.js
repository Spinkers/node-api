"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Routes_1 = require("./routes/Routes");
class App {
    constructor() {
        this.app = express();
        this.config();
        this.routePrv = new Routes_1.Routes();
        this.routePrv.routes(this.app);
        this.mongoUrl = 'mongodb://localhost:27017/NodeApi';
        this.mongoSetup();
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
    config() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map