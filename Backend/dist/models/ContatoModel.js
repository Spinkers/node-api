"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.ContatoSchema = new Schema({
    nome: {
        type: String,
        required: 'Insira o Primeiro Nome.'
    },
    sobrenome: {
        type: String,
        required: 'Insira o Sobrenome.'
    },
    email: {
        type: String
    },
    empresa: {
        type: String
    },
    celular: {
        type: Number
    },
    dataCriacao: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=ContatoModel.js.map