<template>
  <div>
    <h1>{{ $route.params.id }}</h1>
    <TicketsList :tickets="tickets"></TicketsList>
    <input type="text" v-model="newTicket.content"/>
    <input type="radio" v-model="newTicket.type" value="1" />
    <input type="radio" v-model="newTicket.type" value="2" />
    <input type="radio" v-model="newTicket.type" value="3" />
    <button @click="createTicket"> create ticket</button>
  </div>
</template>

<script>

import { db } from '@/firebase.js'
import { mapGetters, mapActions, mapState } from 'vuex'

import TicketsList from '@/components/tickets/List'

const usersRef = db.collection('users')
const ticketsRef = db.collection('tickets')

export default {
  components: {
    TicketsList
  },
  data: function() {
    return {
      newTicket: {
        content: '',
        type: null
      }
    }
  },
  methods: {
    createTicket: function() {
    }
  },
  created: function () {
    this.$store.dispatch('user/setUsersRef', usersRef)
    this.$store.dispatch('ticket/setTicketsRef', ticketsRef)
  },
  computed: {
    ...mapGetters('user', {
      users: 'getUsers'
    }),
    ...mapGetters('ticket', {
      tickets: 'getTickets'
    })
  }
}


</script>

