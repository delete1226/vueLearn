<template>
  <div id="footer" class="footer">
    <div class="footer-box">
      <div class="main">
        {{newMsg}}
      </div>
      <button @click="send">点击</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModelVue',
  data () {
    return {
      newMsg: '摸鱼二队'
    }
  },
  methods: {
    send: function () {
      this.$emit('input', false)
    }
  }
}
</script>

<style scoped>
.footer-box{width: 500px; margin: 100px auto 0; position: relative; background: #1b1b1b;}
.main{width: 100%; text-align: center; margin: 40px 0; color: #fff; font-size: 24px;}

</style>
