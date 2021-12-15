
const moduloLancamentos = {
    state: {
        lancamentos : [
            {
                id: Math.random().toString(36).substr(2,5),
                nome: "Anderson",
                planeta: "Saturno",
                data: "08-08-1991",
                descricao: "destruir a galaxia",
            },
            {
                id: Math.random().toString(36).substr(2,5),
                nome: "Anakin",
                planeta: "Tatooine",
                data: "18-11-1977",
                descricao: "ser o lord sith",
            }
        ]
    },
    getters: {
        todosLancamentos: state => state.lancamentos,
        filteredNames: state => (target) => {
            return state.lancamentos.filter(lancamento =>
                lancamento.nome.toLowerCase().startsWith(target.toLowerCase()))},
        filteredPlanets: state => (target) => {
            return state.lancamentos.filter(lancamento =>
                lancamento.planeta.toLowerCase().startsWith(target.toLowerCase()))},

    },
    
    actions: {
        salvarLancamento: ({ commit }, lancamento) => {
            commit("adicionarLancamento", lancamento);
        },
        excluirLancamento: ({commit}, id) => {
            commit('removerLancamento', id);
        }
    },
    mutations: {
        adicionarLancamento: (state, lancamento) => state.lancamentos.unshift(lancamento),
    
        removerLancamento: (state, id) => state.lancamentos = state.lancamentos.filter(lancamento => lancamento.id !== id)
    },    
}

export default moduloLancamentos;