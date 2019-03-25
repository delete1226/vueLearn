<template>
  <div class="index" id="index">
    <NavList :navMsg="navMsg" :navData="todos" @getChidValue="getValue"></NavList>
    <!-- <ul>
      <li :key="item.id" v-for="(item, index) in todos" @click="testClick(index)">
        {{ item.text }} - {{ index }}
      </li>
    </ul> -->
    <div class="form">
      <span :class="[classFlag>0? 'ok' : 'not']">帐号</span>
      <input type="text" value="" ref="input1">
    </div>
    <div class="form">
      <span>密码</span>
      <input type="text" value="">
    </div>
    <a class="btnLogin" href="javascript:;" @click="getLogin">登录</a>
    <span  v-show="flg">{{ txt }}</span>
    <!-- <div class="btn_pic" v-if="picshow" @click="getPic">截图</div> -->
  </div>
</template>

<script>
import Nav from './comm/Nav'
import html2canvas from 'html2canvas'
import {mapActions} from 'vuex'

export default {
  name: 'Index',
  components: {
    NavList: Nav
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      txt: '显示',
      navMsg: '登录界面',
      flg: false,
      picshow: true,
      userName: '',
      todos: [
        { text: '首页' },
        { text: '赛事' },
        { text: '资讯' },
        { text: '专题' }
      ],
      classFlag: 0
    }
  },
  methods: {
    ...mapActions([
      'setUserName'
    ]),
    testClick: function (ms) {
      console.log(`我要${this.txt}${ms}`)
      // this.flg = true
    },
    getValue: function (val, flag) {
      console.log(val)
      this.txt = val
      this.flg = flag
    },
    getLogin: function () {
      console.log(this.$refs.input1.value)
      this.userName = this.$refs.input1.value
      if (this.userName) {
        this.setUserName(this.userName)
        this.$router.push({name: 'Personal'})
      }
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
.form{margin: 30px 0}
.btnLogin{width: 100px; height: 50px; text-align: center; line-height: 50px; border-radius: 25px; background: #4395ff; color: #fff; display: block; margin: 0 auto; display: block; text-decoration: none; font-size: 20px;}
</style>
