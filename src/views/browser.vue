<template>
  <div>
    <h3 class='browser-header'>浏览器兼容性小谈</h3>
    <section>
      <h4>1. css reset(chrome)</h4>
      <p>只需要设置margin 为 0; padding 是没有影响的</p>
      <code>body {margin: 0}</code>
    </section>
    <section>
      <h4>2. 浏览器内核与前缀的对应关系</h4>
      <core-prefix />
    </section>
    <section>
      <h4>3. javascript</h4>
      <javascriptInteractive />
    </section>
  </div>
</template>

<script>
import CorePrefix from '../components/browser/core&prefix';
import javascriptInteractive from '../components/browser/javascript&interactive'
export default {
  name: "browser",
  data() {
    return {

    }
  },
  components: {
    CorePrefix,
    javascriptInteractive
  }

}
</script>

<style scoped>
code {
  background-color: #eee;
}
.browser-header {
  text-align: center;
}
</style>