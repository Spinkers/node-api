import { Request, Response } from "express";
import { ContatoController } from "../controllers/ContatoController"

export class ContatoRoutes {

    public ContatoController: ContatoController = new ContatoController();

    public routes (app): void {

        app.route('/contato')
        .get(this.ContatoController.obterContatos)
        .post(this.ContatoController.inserirContato)

        app.route('/contato/:idContato')
        .get(this.ContatoController.obterContatoPorId)
        .put(this.ContatoController.atualizarContato)
        .delete(this.ContatoController.deletarContato)
    }
}