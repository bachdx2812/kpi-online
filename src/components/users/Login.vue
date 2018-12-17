<template>
  <div id="login" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Enter your name first</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>
            <input type="text" v-model="userInfo.name"/>
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="saveUser">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data: function() {
    return {
      userInfo: {
        name: '',
        image: null
      }
    }
  },
  mounted: function() {
    this.showOrHide()
  },
  methods: {
    ...mapActions('user', {
      setCurrentUser: 'setCurrentUser'
    }),
    saveUser: function() {
      this.setCurrentUser(this.userInfo)
    },
    show: function() {
      $('#login').modal('show')
    },
    hide: () => {
      $('#login').modal('hide')
    },
    showOrHide: () => {
      if (this.currentUser) {
        this.show()
      } else {
        this.hide()
      }
    }
  },
  computed: {
    ...mapState('user', {
      currentUser: 'currentUser'
    })
  },
  watch: {
    currentUser: function() {
      this.showOrHide()
    }
  }
}
</script>
