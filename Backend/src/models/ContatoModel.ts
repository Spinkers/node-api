import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ContatoSchema  = new Schema ({
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