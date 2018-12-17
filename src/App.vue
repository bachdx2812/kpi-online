<template>
  <div id="app" class="container">
    <router-link to="/">Home</router-link> |
    <button @click="generateAndGoToBoard">create new board</button>

    <router-view></router-view>
  </div>
</template>

<script>
import { db } from '@/firebase.js'

const boardsRef = db.collection('boards')

export default {
  name: 'app',
  methods: {
    generateAndGoToBoard: function() {
      // TODO: make confirm and loading screen/modal

      let self = this;
      boardsRef.add({
        title: 'KPT_20181213'
      }).then(function(newBoard) {
        console.log(newBoard)
        self.$router.push({ path: `/board/${newBoard.id}` })
      })

    }
  }
}
</script>
