import Vue from 'vue'
import Vuex from 'vuex'
import localForage from "localforage";
import VuexPersistence from 'vuex-persist'
import products from './modules/products'
import cart from './modules/cart'
Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: localForage,
  modules: ['cart']
})

export default new Vuex.Store({
  state: {
    
  },
  modules: {
    products,
    cart
  },
  plugins: [vuexLocal.plugin]
})
