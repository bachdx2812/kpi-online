import { firebaseAction } from 'vuexfire'

const state = {
  tickets: []
}

const actions = {
  setTicketsRef: firebaseAction(({ bindFirebaseRef }, ref) => {
    bindFirebaseRef('tickets', ref)
  })
}

const getters = {
  getTickets: (state) => {
    return state.tickets
  }
}

export default {
  namespaced: true,
  getters,
  actions,
  state
}
