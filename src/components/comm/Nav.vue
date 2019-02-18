<template>
  <div id="nav">
    <div class="nav" @click="send">{{ navMsg }}</div>
    <ul>
      <li :key="item.id" v-for="(item, index) in navData" :class="{ frist: index === 0 }">{{ index }} - {{item.text}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Nav',
  props: ['navMsg', 'navData'],
  data () {
    return {
    }
  },
  methods: {
    send: function () {
      console.log(0)
      this.$emit('getChidValue', '子组件回传', true)
    }
  },
  created: function () {
    // console.log(this.navData)
  }

}
</script>

<style scoped>
.nav {width: 100%; text-align: center; font-size: 36px; position: relative; top: 0}
.frist{color: #f00}
ul {list-style-type: none; padding: 0; margin: 20px 0;}
li {display: inline-block; margin: 0 10px;}
</style>
