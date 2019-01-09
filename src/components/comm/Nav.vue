<template>
  <div id="nav">
    <div class="nav" @click="send">{{ navMsg }}</div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: ['navMsg'],
  data () {
    return {
    }
  },
  methods: {
    send: function () {
      this.$emit('getChidValue', '子组件回传', true)
    }
  }

}
</script>

<style scoped>
.nav{width: 100%; text-align: center; font-size: 36px; position: fixed; top: 0}
</style>
