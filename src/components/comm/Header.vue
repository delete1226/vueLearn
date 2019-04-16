<template>
  <div id="header" class="header">
    <slot></slot>
    <p>Hello</p>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
p{color: #fff}
</style>
