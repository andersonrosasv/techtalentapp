export default class Lancamento {

    constructor(name, planet, birthDate, description){
        this.id = Math.random().toString(36).substr(2,5);
        this.name = name;
        this.planet = planet;
        this.birthDate = birthDate;
        this.description = description;
    }
}