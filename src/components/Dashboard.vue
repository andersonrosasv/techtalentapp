<template>
    <div id="lista-rebeldes">
        <input class="form-control container mb-3" placeholder="filtrar por Nome ou Planeta" v-model="searchText"/>

        <div id="lista-rebeldes-heading">
            <div class="rebelde-id">#:</div>
            <div>Nome:</div>
            <div>Planeta:</div>
            <div>Nascimento:</div>
            <div></div>
        </div>
    </div>
    <div id="lista-rebeldes-rows">
        <div class="lista-rebeldes-row" v-for="lancamento in filtered" v-bind:key="lancamento.id">
            <div class="rebelde-number">{{lancamento.id}}</div>
            <div>{{lancamento.name}}</div>
            <div>{{lancamento.planet}}</div>
            <div>{{lancamento.birthDate}}</div>
            <div>
                <button class="delete-btn" @click="excluirLancamento(lancamento.id)">Remover</button>
            </div>
        </div>        
    </div>

</template>

<script>

import { mapActions } from 'vuex'
import { mapGetters } from 'vuex';

export default {
    name: "Dashboard",
    data(){
        return {
        
            searchText: "",
        }
    },
    methods: mapActions(["excluirLancamento"]),
    computed: {
        ...mapGetters(["todosLancamentos", "filteredText"]),
        filtered(){
        return this.filteredText(this.searchText)
        }       
    },
}

</script>

<style scoped>
#lista-rebeldes {
    max-width: 1200px;
    margin: 0 auto;
}

#lista-rebeldes-heading,
#lista-rebeldes-rows,
.lista-rebeldes-row {
    display: flex;
    flex-wrap: wrap;
}

#lista-rebeldes-heading {
    font-weight: 12px;
    padding: 12px;
    border-bottom: 3px solid #333;
}

#lista-rebeldes-heading div,
.lista-rebeldes-row div {
    width: 19%;
}

.lista-rebeldes-row {
    width: 100%;
    padding: 12px;
    border-bottom: 1px solid #CCC;
}

#lista-rebeldes-heading .rebelde-id,
.lista-rebeldes-row .rebelde-number {
    width: 5%;
}

select {
    padding:12px 6px;
    margin-right: 12px;
}

.delete-btn {
    background-color: #222;
    color: tomato;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
}

.delete-btn:hover {
    background-color: transparent;
    color: #222;
}

</style>