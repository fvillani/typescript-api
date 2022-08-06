import express, {Application, Request, Response} from "express";
import Database from "./src/infra/db";
import "./src/shared/container";
import newsRouter from "./src/router/newsRouter";
import videosRouter from "./src/router/videosRouter";
import galeriaRouter from "./src/router/galeriaRouter";

class StartUp {
    public app: Application;
    private _db: Database = new Database();


    constructor() {
        this.app = express();
        this._db.createConnection();
        this.routes();
    }

    routes() {
        this.app.route("/").get((req: Request, res: Response) => {
            res.send({versao: "0.0.1"});
        });

        this.app.use("/", newsRouter);

        this.app.use("/", videosRouter);

        this.app.use("/", galeriaRouter);
    }
}

export default new StartUp();