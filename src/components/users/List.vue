<template>
  <div class="well">
    <div v-for="user in users">{{ user.name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
      default: []
    }
  }
}
</script>

<style scoped>
</style>
