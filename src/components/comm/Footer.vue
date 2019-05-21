<template>
  <div id="footer" class="footer">
    <div class="footer-box">
      <div class="main">
        {{footMsg}}
      </div>
      <button @click="send">点击</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: [
    'footMsg'
  ],
  data () {
    return {
      newMsg: '点击触发-摸鱼二队'
    }
  },
  methods: {
    send: function () {
      this.$emit('getFooterMsg', this.newMsg)
    }
  }
}
</script>

<style scoped>
.footer-box{width: 100%; position: fixed; background: #1b1b1b; bottom: 0;}
.main{width: 100%; text-align: center; margin: 40px 0; color: #fff; font-size: 24px;}

</style>
