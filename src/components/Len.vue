<template>
  <div id="Len" class="len">
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
   <p class="px">{{msg}}</p>
   <p class="px" :key="item.id" v-for="(item, index) in obj">
     {{ index }} - {{item.name}} - {{item.age}} - {{item.sex}}
   </p>
   <button @click="btnObj">点我</button>
  </div>
</template>

<script>
import Header from './comm/Header'

export default {
  name: 'Len',
  components: {
    NavHeader: Header
  },
  data () {
    return {
      msg: '15',
      obj: [
        {name: '张三', age: 10},
        {name: '李四', age: 20}
      ]
    }
  },
  methods: {
    btnObj: function () {
      this.$set(this, 'msg', '男')
      this.obj[0].sex = '女'
    },
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
.len { width: 100%; height: 100%;}
span {color: #fff}
.px {color: #fff}
</style>
