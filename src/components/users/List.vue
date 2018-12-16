<template>
  <div>
    <ul>
      <li v-for="user in users"> {{ user.name }}</li>
    </ul>
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
