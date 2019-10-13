<template>
  <div>
    <h3>两个相似属性的不同点</h3>
    <section>
      <h4>1. 全局属性window</h4>
    </section>
    <section>
      <h4>2. link 与 @import 以及 @import url（）的区别</h4>
      <LinkImport />
    </section>
    <section>
      <h4>3. cooike 与 Web storage 的区别</h4>
      <CookieStorage />
    </section>
  </div>
</template>

<script>
import LinkImport from '../components/different/link-@import'
import CookieStorage from '../components/different/cookie-storage'

export default {
  name: 'different',
  components: {
    LinkImport,
    CookieStorage
  }
}
</script>

<style>

</style>