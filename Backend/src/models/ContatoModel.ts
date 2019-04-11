import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ContatoSchema = new Schema({
    pessoaId: {
        type: Schema.Types.ObjectId,
        required: 'Insira um ID de Pessoa. Obrigatório!'
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