<template>
  <div>
    <p>2.1 页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载</p>
    <p>2.2 link支持使用js控制DOM去改变样式，而@import不支持; (因为link也是标签)</p>
    <p>2.3 @import url() 与 @import 只是兼容性上的问题</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
