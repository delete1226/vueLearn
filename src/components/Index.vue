<template>
  <div id="Index" class="index">
   <a href="javascript:;" @click="queryList">hello Word</a>
   <NavHeader>
    <div class="tmpl">
      <span>菜单1</span>
      <span>菜单2</span>
      <span>菜单3</span>
      <span>菜单4</span>
      <span>菜单5</span>
      <span>菜单6</span>
    </div>
   </NavHeader>
  </div>
</template>

<script>
import Header from './comm/Header'

export default {
  name: 'Index',
  components: {
    NavHeader: Header
  },
  methods: {
    goto: function () {
      this.$router.push({name: 'Login'})
    },
    queryList: function () {
      this.$http.get('http://localhost:3000/dj/program/', {params: {rid: 336355127}}).then((response) => {
        console.log(response.data)
      }).catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>
.index { width: 100%; height: 100%; background: url(../assets/bg1.jpg)}
span {color: #fff}
</style>
