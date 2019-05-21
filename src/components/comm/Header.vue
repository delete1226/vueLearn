<template>
  <div id="header" class="header">
    <div class="header-box">
      <div class="main">
        <div class="logo"></div>
        <ul>
          <li><a href="javascript:;" class="sel">首页</a></li>
          <li><a href="javascript:;">一级摸鱼栏目</a></li>
          <li><a href="javascript:;">二级摸鱼栏目</a></li>
          <li><a href="javascript:;">三级摸鱼栏目</a></li>
          <li><a href="javascript:;">四级摸鱼栏目</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header-box{width: 100%; position: fixed; height: 80px; background: #1b1b1b; box-shadow: 0 2px 4px rgba(0,0,0,.08); top: 0; z-index: 9;}
.main{width: 1000px; height: 80px; margin: 0 auto; position: relative;}
.main .logo{width: 230px; height: 80px; position: absolute; left: 0; top: 0; background: url(../../assets/logo.png);}
.main ul{position: absolute; overflow: hidden; right: 0;}
.main li{width: 130px; float: left; margin-left: 1px;}
.main li a{width: 100%; height: 100%; display: block; color: #ffffff; font-size: 16px; text-align: center; line-height: 80px; transition: all 0.2s linear;}
.main a:hover, .main .sel{background: #ffd500; color: #1b1b1b}
</style>
