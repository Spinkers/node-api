"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const ContatoModel_1 = require("../models/ContatoModel");
const Contato = mongoose.model('Contato', ContatoModel_1.ContatoSchema);
class ContatoController {
    inserirContato(req, res) {
        console.log(req.body);
        let novoContato = new Contato(req.body);
        console.log(novoContato);
        novoContato.save((err, contato) => {
            if (err)
                res.send(err);
            res.json(contato);
        });
    }
    obterContatos(req, res) {
        Contato.find({}, (err, contato) => {
            if (err)
                res.send(err);
            res.json(contato);
        });
    }
    obterContatoPorId(req, res) {
        Contato.findById(req.params.idContato, (err, contato) => {
            if (err)
                res.status(err);
            res.json(contato);
        });
    }
    atualizarContato(req, res) {
        Contato.findOneAndUpdate({ _id: req.params.idContato }, req.body, { new: true }, (err, contato) => {
            if (err)
                res.send(err);
            res.json(contato);
        });
    }
    deletarContato(req, res) {
        Contato.remove({ _id: req.params.idContato }, (err, contato) => {
            if (err)
                res.send(err);
            res.json(contato);
        });
    }
}
exports.ContatoController = ContatoController;
//# sourceMappingURL=ContatoController.js.map