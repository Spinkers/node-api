import { Request, Response } from "express";
import { ContatoController } from "../controllers/ContatoController"


export class Routes {

    public ContatoController: ContatoController = new ContatoController();

    public routes (app): void {

        // Rota de Contato
        app.route('/contato')
        .get(this.ContatoController.obterContatos)
        .post(this.ContatoController.inserirContato)

        // GET, PUT, DELETE por ID
        app.route('/contato/:idContato')
        .get(this.ContatoController.obterContatoPorId)
        .put(this.ContatoController.atualizarContato)
        .delete(this.ContatoController.deletarContato)
    }
}