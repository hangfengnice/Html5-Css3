<template>
  <div class='interactive'>
    <pre>
      // 绑定事件
      addEventListener || attachEvent

      // 解除事件
      removeEventListener || detachEvent

      // 取消默认事件
      event.preventDefault() || event.returnValue = false

      // 阻止冒泡
      event.stopPropagation() || event.cancelBubble = true
    </pre>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .interactive {
    background-color: #eee;
  }
</style>