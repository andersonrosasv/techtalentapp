<template>
        <div id="painelCadastro">
        <div id="formularioCadastro">
            <form @submit="salvar">
                <label for="nome">Nome</label>
                <input type="text" name="nome" id="nome" required v-model="nome"/>
                <label for="planeta">Planeta</label>
                <input type="text" name="planeta" id="planeta" required v-model="planeta"/>
                <label for="data">Data de Nascimento</label>
                <input type="date" name="data" id="data" required v-model="data" />
                <label for="descricao">Qual sua motivação para entrar na aliança?</label>
                <textarea rows="" cols="" name="descricao" id="descricao" required v-model="descricao"></textarea>

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
            nome: "",
            planeta: "",
            data: "",
            descricao: "",
        }
    },
    methods: {
        ...mapActions(["salvarLancamento"]),
        salvar(event){
            event.preventDefault();
            const lancamento = new Lancamento(this.nome, this.planeta, this.data, this.descricao);
            this.salvarLancamento(lancamento);
            
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
    background-color:tomato;
}

#formularioCadastro{
    min-height: 400px;
    width: 300px;
    background-color: linen;
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