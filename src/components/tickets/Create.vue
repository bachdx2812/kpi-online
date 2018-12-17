<template>
  <div>
    <input type="text" v-model="newTicket.content"/>
    <input type="radio" v-model="newTicket.type" value="1" />
    <input type="radio" v-model="newTicket.type" value="2" />
    <input type="radio" v-model="newTicket.type" value="3" />
    <button @click="createTicket"> create ticket</button>
  </div>
</template>

<script>
import { db } from '@/firebase.js'

const ticketsRef = db.collection('tickets')

export default {
  props: {
    boardId: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      newTicket: {
        content: '',
        type: null,
        boardId: this.boardId
      }
    }
  },
  methods: {
    createTicket: function() {
      ticketsRef.add(this.newTicket)
    }
  }
}
</script>
