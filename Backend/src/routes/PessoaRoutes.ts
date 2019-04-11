import { Request, Response } from "express";
import { PessoaController } from "../controllers/PessoaController";

export class PessoaRoutes {

    public PessoaController: PessoaController = new PessoaController();

    public routes (app): void {

        app.route('/pessoa')
        .get(this.PessoaController.obterPessoas)
        .post(this.PessoaController.inserirPessoa)

        app.route('/pessoa/:idPessoa')
        .get(this.PessoaController.obterPessoaPorId)
        .put(this.PessoaController.alterarPessoa)
        .delete(this.PessoaController.deletarPessoa)
    }
}
