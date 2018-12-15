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
  getTicketsByBoardId: (state) => (boardId) => {
    return state.tickets.filter(ticket => ticket.boardId === boardId)
  }
}

export default {
  namespaced: true,
  getters,
  actions,
  state
}
