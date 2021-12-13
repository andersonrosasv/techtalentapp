const moduloLancamentos = {
    state: {
        lancamentos : [
            {
                id: Math.random().toString(36).substr(2,5),
                nome: "Anderson",
                planeta: "Saturno",
                data: "1991-08-08",
                descricao: "destruir a galaxia",
            }
        ]
    },
    getters: {
        todosLancamentos: state => state.lancamentos,
    },
    actions: {
        salvarLancamento: ({ commit }, lancamento) => {
            commit("adicionarLancamento", lancamento);
        }
    },
    mutations: {
        adicionarLancamento: (state, lancamento) => state.lancamentos.unshift(lancamento),
    },
}

export default moduloLancamentos;