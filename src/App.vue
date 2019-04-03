<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <router-view name="a"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html{width: 100%; height: 100%;}
body,dl,dd,h1,h2,h3,h4,h5,h6,p,span{margin:0;padding:0px;}
body{min-width:1000px; height: 100%; font:12px/1.5 arial,"\5FAE\8F6F\96C5\9ED1",sans-serif;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;background:#330c2f; color:#fff}
h1,h2,h3,h4,h5,h6{font-size:100%;}
em,i,b{font-style:normal}
ul,ol{list-style:none;margin:0;padding:0;}
a{text-decoration:none;color:#fff}
a:hover{text-decoration:underline}
a:focus{outline:none;}
table{border-collapse:collapse;border-spacing:0}
img{border: none;padding: 0;margin:0;}
.fl{float:left;}
.fr{float:right;}
.bc{margin-left: auto;margin-right: auto}
.pr{position:relative;}
.pa{position:absolute;}
.ovh{overflow:hidden;}
.db{display:block;}
.none{display:none;}
.tc{text-align: center}
.ht{display:block;overflow:hidden;text-indent:-999em;}
.clearfix{zoom:1}
.clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden}
#app {font-family: 'Avenir', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-align: center; color: #2c3e50;  width: 100%;  height: 100%; }
</style>
