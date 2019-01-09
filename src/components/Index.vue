<template>
  <div class="index">
    <NavList :navMsg="navMsg" @getChidValue="getValue"></NavList>
    <ul>
      <li :key="item.id" v-for="(item, index) in todos" @click="testClick(index)">
        {{ item.text }} - {{ index }}
      </li>
    </ul>
    <span  v-show="flg">{{ txt }}</span>
    <div></div>
  </div>
</template>

<script>
import Nav from './comm/Nav'

export default {
  name: 'Index',
  components: {
    NavList: Nav
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      txt: '显示',
      navMsg: '首页导航',
      flg: false,
      todos: [
        { text: 'JavaScript' },
        { text: 'Vue' },
        { text: 'jQuery' }
      ]
    }
  },
  methods: {
    testClick: function (ms) {
      console.log(`我要${this.txt}${ms}`)
      // this.flg = true
    },
    getValue: function (val, flag) {
      this.txt = val
      this.flg = flag
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  cursor: pointer;
}
</style>
