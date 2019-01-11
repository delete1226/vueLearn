<template>
  <div id="nav">
    <div class="nav" @click="send">{{ navMsg }}</div>
    <div :key="item.id" v-for="(item, index) in navData" :class="{ frist: index === 0 }">
      {{ index }} - {{item.text}}
      </div>
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
      this.$emit('getChidValue', '子组件回传', true)
    }
  },
  created: function () {
    console.log(this.navData)
  }

}
</script>

<style scoped>
.nav {width: 100%; text-align: center; font-size: 36px; position: fixed; top: 0}
.frist{color: #f00}
</style>
