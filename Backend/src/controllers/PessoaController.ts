import * as mongoose from "mongoose";
import { Request, Response } from "express";
import { PessoaSchema } from "../models/PessoaModel"

const Pessoa = mongoose.model('Pessoa', PessoaSchema);

export class PessoaController {

    public inserirPessoa (req: Request, res: Response) {
        let novaPessoa = new Pessoa(req.body);
        novaPessoa.save((err, pessoa) => {
            if (err) res.send(err);
            res.json(pessoa);
        })
    }

    public obterPessoas (req: Request, res: Response) {
        Pessoa.find({}, (err, pessoa) => {
            if (err) res.send(err);
            res.json(pessoa);
        })
    }

    public obterPessoaPorId (req: Request, res: Response) {
        Pessoa.findById(req.params.idPessoa, (err, pessoa) => {
            if (err) res.send(err);
            res.json(pessoa);
        })
    }

    public alterarPessoa (req: Request, res: Response) {
        Pessoa.findOneAndUpdate({ _id: req.params.idPessoa }, req.body, { new: true }, (err, pessoa) => {
            if (err) res.send(err);
            res.json(pessoa);
        })
    }

    public deletarPessoa (req: Request, res: Response) {
        Pessoa.remove({ _id: req.params.idPessoa }, (err, pessoa) => {
            if (err) res.send(err);
            res.json(pessoa);
        })
    }
}
