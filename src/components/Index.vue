<template>
  <div id="Index" class="index">
   <NavHeader></NavHeader>
   <Footer :footMsg="footmsg" @getFooterMsg="setFooterMsg"></Footer>
   <ModelVue v-if="showStatus" v-model="showStatus"></ModelVue>
   <div>{{ text | trim(1) }}</div>
   <div>{{fullname}}</div>
   <button @click="setname">点击改变name</button>
  </div>
</template>

<script>
import Header from './comm/Header'
import Footer from './comm/Footer'
import ModelVue from './comm/ModelVue'

export default {
  name: 'Index',
  components: {
    NavHeader: Header,
    Footer: Footer,
    ModelVue: ModelVue
  },
  data () {
    return {
      footmsg: '摸鱼生产中队',
      showStatus: true,
      text: '           1',
      firstname: 'huang',
      lastname: '12'
      // fullname: ''
    }
  },
  methods: {
    setFooterMsg: function (val) {
      this.footmsg = val
      console.log(val)
    },
    setname: function () {
      // this.firstname = 'zx'
      this.$router.push({name: 'Personal'})
    }
  },
  computed: {
    fullname: function () {
      return this.firstname + this.lastname
    }
  },
  watch: {
    firstname: function (val) {
      console.log(val)
      this.fullname = val + this.lastname
    }
  }
}
</script>

<style scoped>
.index{width: 100%; height: 100%;}
</style>
