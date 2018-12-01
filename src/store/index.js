import Vuex from 'vuex'
import Vue from 'vue'
import { firebaseMutations } from 'vuexfire'

import user from '@/store/modules/user'
import ticket from '@/store/modules/ticket'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    ticket
  },
  mutations: {
    ...firebaseMutations
  }
})
