import { createStore } from 'vuex';
import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import cartModule from './modules/cart.js';
import productsModule from './modules/products.js';

const store = createStore({
  modules: {
    cart: cartModule,
    prods: productsModule
  },
  state() {
    return {};
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
});

export default store;
