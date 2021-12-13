export default class Lancamento {

    constructor(nome, planeta, data, descricao){
        this.id = Math.random().toString(36).substr(2,5);
        this.nome = nome;
        this.planeta = planeta;
        this.data = data;
        this.descricao = descricao;
    }
}