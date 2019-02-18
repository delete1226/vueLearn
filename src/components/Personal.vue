<template>
  <div id="personal">
    欢迎你：{{userName}}
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Personal',
  data () {
    return {
    }
  },
  methods: {
  },
  created: function () {
    // console.log(this.$route.params.id)
    // this.userName = this.$route.params.id
    // console.log(this.userName)
    // console.log(this.mapGetters.userName)
    // if (this.mapGetters.userName) {
    //   this.$router.push({name: 'Index'})
    // }
    // console.log(this.navData)
  },
  computed: {
    ...mapGetters([
      'userName'
    ])
  }

}
</script>

<style scoped>

</style>
