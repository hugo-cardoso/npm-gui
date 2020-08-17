import Vue from 'vue'
import Vuex from 'vuex'
import Store from 'electron-store'

import { createPersistedState } from 'vuex-electron'

import modules from './modules'
import state from './state'
import actions from './actions'
import mutations from './mutations'

const store = new Store({ name: 'vuex' })
store.clear()

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  state,
  actions,
  mutations,
  plugins: [
    createPersistedState()
    // createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production'
})
