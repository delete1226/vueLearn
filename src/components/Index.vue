<template>
  <div class="index" id="index">
    <NavList :navMsg="navMsg" :navData="todos" @getChidValue="getValue"></NavList>
    <ul>
      <li :key="item.id" v-for="(item, index) in todos" @click="testClick(index)">
        {{ item.text }} - {{ index }}
      </li>
    </ul>
    <span  v-show="flg">{{ txt }}</span>
    <div class="btn_pic" v-if="picshow" @click="getPic">截图</div>
  </div>
</template>

<script>
import Nav from './comm/Nav'
import html2canvas from 'html2canvas'

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
      picshow: true,
      todos: [
        { text: '首页' },
        { text: '赛事' },
        { text: '资讯' },
        { text: '专题' }
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
    },
    getPic: function () {
      this.picshow = false
      setTimeout(() => {
        html2canvas(document.body).then(canvas => {
          document.body.appendChild(canvas)
        })
      }, 500)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {font-weight: normal;}
ul {list-style-type: none; padding: 0;}
li {display: inline-block; margin: 0 10px;}
a {color: #42b983; cursor: pointer;}
.btn_pic {width: 100px; height: 50px; border-radius: 100px; text-align: center; line-height: 50px; background: chartreuse; margin: 50px auto 0;}
</style>
