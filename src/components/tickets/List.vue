<template>
  <div class="row">
    <div class="col col-lg-4" v-for="type in ticketTypes" :key="type.type">
      <div class="card">
        <div class="card-header">{{ type.title }}</div>
        <div class="card-body">
          <div v-for="ticket in filteredTickets(type.value)" class="card" :class="columnClass(type.value)">
            <div class="card-body">
              <p class="card-title">{{ ticket.username }}</p>
              <p class="card-text">{{ ticket.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tickets: {
      type: Array,
      required: true
    }
  },
  created: function() {
    this.ticketTypes = [
      {
        title: 'KEEP',
        value: 1
      },
      {
        title: 'PROBLEM',
        value: 2
      },
      {
        title: 'TRY',
        value: 3
      }
    ]
  },
  methods: {
    filteredTickets: function(type) {
      return this.tickets.filter(ticket => ticket.type == type)
    },
    columnClass: function(type) {
      switch(type) {
        case 1:
          return "bg-success";
          break;
        case 2:
          return "bg-warning";
          break;
        case 3:
          return "bg-info";
          break;
        default:
          break;
      }
    }
  }
}
</script>
