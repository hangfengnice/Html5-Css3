<template>
  <div>
    <h3>vue-router</h3>
    <pre>
      1. 本质上来说： 建立管理 url 跟 组建之间的映射关系
      2. 两种模式： hash history 
         hash: 
         hash (#) 后面值的改变能够 触发 hashchange 事件

         history：
         history.pushState() history.replaceState()  
         history.back() history.forward() history.go() 才能触发popstate 事件
      3. 路由守卫
      
         全局守卫 beforeEach
         路由守卫 beforeEnter
         组件守卫 beforeRouteEnter beforeRouteUpdate beforeRouteLeave
      4. 路由懒加载
      5. 路由组件的传参
         name params; path query
      6. 重定向和别名
         redirect alias （路径的别名）
      7. 命名视图
      8. 滚动行为
        ❕注意: 这个功能只在支持 history.pushState 的浏览器中可用
        scrollBehavior(to, from, savedPositon)
    </pre>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>