import { firebaseAction } from 'vuexfire'

const state = {
  users: []
}

const actions = {
  setUsersRef: firebaseAction(({ bindFirebaseRef }, ref) => {
    bindFirebaseRef('users', ref)
  })
}

const getters = {
  getUsers: (state) => {
    return state.users
  }
}

export default {
  namespaced: true,
  getters,
  actions,
  state
}
