<template>
  <div>
    <h1>{{ $route.params.id }}</h1>
    <UserLogin></UserLogin>
    <UsersList :users="users"></UsersList>
    <TicketsList :tickets="tickets"></TicketsList>
    <TicketCreate :board-id="boardId"></TicketCreate>
  </div>
</template>

<script>

import { db } from '@/firebase.js'
import { mapGetters, mapActions, mapState } from 'vuex'

import TicketsList from '@/components/tickets/List'
import TicketCreate from '@/components/tickets/Create'

import UserLogin from '@/components/users/Login'
import UsersList from '@/components/users/List'

const usersRef = db.collection('users')
const ticketsRef = db.collection('tickets')

export default {
  components: {
    TicketsList,
    TicketCreate,
    UsersList,
    UserLogin
  },
  created: function () {
    this.boardId = this.$route.params.id

    this.$store.dispatch('user/setUsersRef', usersRef)
    this.$store.dispatch('ticket/setTicketsRef', ticketsRef)
  },
  computed: {
    ...mapState('user', {
      currentUser: 'currentUser'
    }),
    ...mapGetters('user', {
      users: 'getUsers'
    }),
    tickets: function() {
      return this.$store.getters['ticket/getTicketsByBoardId'](this.boardId)
    }
  }
}

</script>
