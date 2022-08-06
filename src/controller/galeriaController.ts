import {Request, Response} from "express";
import {inject, injectable} from "tsyringe";
import {IGaleriaService} from "../contracts/iGaleriaService";

@injectable()
export class GaleriaController {

    constructor(@inject('IGaleriaService') private _service: IGaleriaService) {}

    async get(request: Request, response: Response) {
        try {
            const page = request.params.page ? parseInt(request.params.page) : 1;

            const qtd = request.params.qtd ? parseInt(request.params.qtd) : 10;

            let result = await this._service.getAll(page, qtd);

            response.status(200).json({result});
        } catch (e) {
            response.status(500).json({error:e.message || e.toString()});
        }
    }

    async getById(request: Request, response: Response) {
        try {
            const id = request.params.id;

            let result = await this._service.get(id);

            response.status(200).json({result});
        } catch (e) {
            response.status(500).json({error:e.message || e.toString()});
        }
    }
}