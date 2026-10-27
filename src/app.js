//Arquivo responsável por iniciar a aplicação
import express from "express";
import routes from "./routes.js";
//import authMiddleware from "./app/middlewares/auth";

import "./database/index.js";

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
        //this.server.use(authMiddleware);
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;
