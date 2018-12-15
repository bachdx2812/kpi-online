<template>
  <div id="app">
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
      // TODO : create new board and inject id into route
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

<style scoped>
</style>
