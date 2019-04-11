import * as mongoose from "mongoose";
import { ContatoSchema } from "../models/ContatoModel";
import { Request, Response } from "express";

const Contato = mongoose.model('Contato', ContatoSchema);

export class ContatoController {

    public inserirContato (req: Request, res: Response) {
        console.log(req.body);

        let novoContato = new Contato(req.body);

        console.log(novoContato);

        novoContato.save((err, contato) => {
            if (err) res.send(err);
            res.json(contato);
        })
    }

    public obterContatos (req: Request, res: Response) {
        Contato.find({}, (err, contato) => {
            if (err) res.send(err);
            res.json(contato)
        });
    }

    public obterContatoPorId (req: Request, res: Response) {
        Contato.findById(req.params.idContato, (err, contato) => {
            if (err) res.status(err);
            res.json(contato);
        })
    }

    public atualizarContato (req: Request, res: Response) {
        Contato.findOneAndUpdate({ _id: req.params.idContato }, req.body, { new: true }, (err, contato) => {
            if (err) res.send(err);
            res.json(contato);
        })
    }

    public deletarContato (req: Request, res: Response) {
        Contato.remove({ _id: req.params.idContato }, (err, contato) => {
            if (err) res.send(err);
            res.json(contato);
        })
    }
}