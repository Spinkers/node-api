import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const PessoaSchema = new Schema ({
    nome: {
        type: String,
        required: 'Insira o nome da Pessoa.'
    },
    sobrenome: {
        type: String,
        required: 'Insira o sobrenome da Pessoa.'
    },
    profissao: String,
    nascimento: Date.UTC,
    dataCriacao: Date.now,
})
