<template>
        <div id="painelCadastro">
        <div id="formularioCadastro">
            <form @submit="salvar">
                <label for="name">Nome</label>
                <input type="text" name="name" id="name" required v-model="name"/>
                <label for="planet">Planeta</label>
                <input type="text" name="planet" id="planet" required v-model="planet"/>
                <label for="birthDate">Data de Nascimento</label>
                <input type="date" name="birthDate" id="birthDate" required v-model="birthDate" />
                <label for="description">Qual sua motivação para entrar na aliança?</label>
                <textarea rows="" cols="" name="description" id="description" required v-model="description"></textarea>

                <button>Cadastrar</button>
            </form>            
        </div>
        </div>
</template>

<script>
import Lancamento from '../models/Lancamento';
import {mapActions} from 'vuex';

export default {
    name: "Cadastro",
    data: () => {
        return {
            name: "",
            planet: "",
            birthDate: "",
            description: "",
        }
    },
    methods: {
        ...mapActions(["salvarLancamento"]),
        salvar(event){
            event.preventDefault();
            const lancamento = new Lancamento(this.name, this.planet, this.birthDate, this.description);
            this.salvarLancamento(lancamento);
            this.limparFormulario();
        },
        limparFormulario(){
            this.name="";
            this.planet="";
            this.birthDate="";
            this.description="";
        }
    }
}

</script>

<style scoped>
#painelCadastro {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#fff;
}

#formularioCadastro{
    min-height: 400px;
    width: 300px;
    background-color: rgb(212, 151, 89);
    box-sizing: border-box;
    padding: 32px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#nome,
#planeta,
#data,
button, textarea {
    display: block;
    margin-bottom: 10px;
}

label {
    color: #222;
    font-weight: bold;
    padding: 5px 10px;
    border-left: 2px solid tomato;
}

input, textarea {
    height: 48px;
    width: 100%;
    box-sizing: border-box;
    padding-left: 8px;
    border: unset;
    outline: none;
}

button {
    background-color:#222;
    color: tomato;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
    width: 100%;
}

button:hover {
    background-color: transparent;
    color: #222;
}
</style>