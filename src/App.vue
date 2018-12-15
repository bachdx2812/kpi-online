<template>
  <div id="app">
    <router-link to="/">Home</router-link> |
    <router-link to="/board">Create new Board</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  created: function () {
  },
  computed: {
  }
}
</script>

<style scoped>
</style>
