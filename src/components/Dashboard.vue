<template>
    <div id="lista-rebeldes">
        <input class="form-control container mb-3" placeholder="Filtre por nome" v-model="searchedName"/>
        <input class="form-control container mb-3" placeholder="Filtre por planeta" v-model="searchedPlanet"/>
        <div id="lista-rebeldes-heading">
            <div class="rebelde-id">#:</div>
            <div>Nome:</div>
            <div>Planeta:</div>
            <div>Nascimento:</div>
            <div>Filtrar</div>
        </div>
    </div>
    <div id="lista-rebeldes-rows">
        <div class="lista-rebeldes-row" v-for="lancamento in filtered" v-bind:key="lancamento.id">
            <div class="rebelde-number">{{lancamento.id}}</div>
            <div>{{lancamento.nome}}</div>
            <div>{{lancamento.planeta}}</div>
            <div>{{lancamento.data}}</div>
            <div>
                <button class="delete-btn">Remover</button>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    name: "Dashboard",
    data(){
        return {
            searchedName:"",
        }
    },
    computed: {
        ...mapGetters(["todosLancamentos", "filteredNames"]),
        filtered() {
        return this.filteredNames(this.searchedName);
    },
        }
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