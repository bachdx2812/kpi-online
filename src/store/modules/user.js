import { firebaseAction } from 'vuexfire'

const state = {
  users: [],
  currentUser: null
}

const mutations = {
  setCurrentUser: function(state, payload) {
    state.currentUser = payload.data
  }
}

const actions = {
  setUsersRef: firebaseAction(({ bindFirebaseRef }, ref) => {
    bindFirebaseRef('users', ref)
  }),
  setCurrentUser: function({ commit }, userInfo){
    commit('setCurrentUser', {
      data: userInfo
    })
  }
}

const getters = {
  getUsers: (state) => {
    return state.users
  }
}

export default {
  namespaced: true,
  mutations,
  getters,
  actions,
  state
}
