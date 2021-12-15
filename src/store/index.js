import { createStore } from 'vuex';
import moduloLancamentos from './modules/lancamentos';

const store = createStore({
    modules: {
        moduloLancamentos,
    }
});

export function filterNames(){
    return this.state.lancamentos.filter(lancamento =>lancamento.nome.includes(this.search));
}

export default store;
