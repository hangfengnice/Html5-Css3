<template>
  <div id="app">
    <el-container>
      <el-header class='el-header'>
        个人前端知识的小结
      </el-header>

      <div class='aside-main'>
        <el-aside width="200px">
        <aside-tree></aside-tree>
      </el-aside>
      <el-main class='el-main'>
        <router-view />
      </el-main>
      </div>
    </el-container>
    <!-- <pre>
      // 绑定事件
      addEventListener || attachEvent

      // 解除事件
      removeEventListener || detachEvent

      // 取消默认事件
      event.preventDefault() || event.returnValue = false

      // 阻止冒泡
      event.stopPropagation() || event.cancelBubble = true
    </pre> -->
  </div>
</template>

<script>
import AsideTree from './components/aside-tree'

export default {
  name: 'app',
  components: {
    AsideTree
  }
}
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.el-header {
  margin: 0 0 10px;
  text-align: center;
  font: 800;
  font-size: 24px;
  line-height: 60px;
}
.aside-main {
  display: flex;
  margin: 20px 0;
}
.el-aside {
  margin: 0 20px;
}

.el-main {
  margin: -10px 0 0;
  padding: 0;
}
.el-header,
.el-aside,
.el-main {
  box-shadow: 2px 2px 2px rgb(29, 151, 90);
}
</style>
