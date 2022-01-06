
const moduloLancamentos = {
    state: {
        lancamentos : [
            {
                id: Math.random().toString(36).substr(2,5),
                name: "Anderson",
                planet: "Saturno",
                birthDate: "08-08-1991",
                description: "destruir a galaxia",
            },
            {
                id: Math.random().toString(36).substr(2,5),
                name: "Anakin",
                planet: "Tatooine",
                birthDate: "18-11-1977",
                description: "ser o lord sith",
            }
        ]
    },
    getters: {
        todosLancamentos: state => state.lancamentos,

        filteredText: state => (target) => {
            return state.lancamentos.filter(lancamento =>
                lancamento.name.toLowerCase().startsWith(target.toLowerCase()) ||
                lancamento.planet.toLowerCase().startsWith(target.toLowerCase()))
        },

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