<template>
  <div class="list" id="List">
    <div class="list-box">
      底部导航
    </div>
  </div>
</template>

<script>

export default {
  name: 'List',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-box{width: 100%; position: fixed; height: 50px; text-align: center; font-size: 26px; line-height: 50px; bottom: 0;}
</style>
