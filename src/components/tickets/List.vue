<template>
  <div class="content">
    <div class="c-fluxopesquisa-board">
      <div class="c-fluxopesquisa-columns">

        <div v-for="type in ticketTypes" :key="type.type" class="c-fluxopesquisa-column">
          <div class="c-fluxopesquisa-column__header">
            <h4 class="c-fluxopesquisa-column__header-title">
              <span>{{ type.title }} </span>
              <span class="c-fluxopesquisa-column__header-counter">5</span>
            </h4>
          </div>
          <div class="c-fluxopesquisa-column__cards">

            <div v-for="ticket in filteredTickets(type.value)" :key="ticket.key" class="c-fluxopesquisa-card">
              <div class="c-fluxopesquisa-card__responsible"></div>

              <div class="c-fluxopesquisa-card__content">
                <div class="c-fluxopesquisa-card__title">
                  <span class="c-fluxopesquisa-card__status c-fluxopesquisa-card__status--open">Aberto</span>
                </div>
                <div class="c-fluxopesquisa-card__info">
                  <span>{{ ticket.content }} </span>
                </div>
                <div class="c-fluxopesquisa-card__dates">
                  <div class="c-fluxopesquisa-card__date">
                    <i class="fa fa-calendar-o"></i> 10/10/16
                  </div>
                </div>
              </div>
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
        title: 'Keep',
        value: 1
      },
      {
        title: 'Problem',
        value: 2
      },
      {
        title: 'Try',
        value: 3
      }
    ]
  },
  methods: {
    filteredTickets: function(type) {
      return this.tickets.filter(ticket => ticket.type == type)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/components/tickets/list.scss'
</style>
