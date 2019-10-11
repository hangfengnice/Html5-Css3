<template>
  <div>
    <p class='inner-title'>2.1 语法</p>

    <p>animation属性 👇</p>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="property" label="属性" width="180"></el-table-column>
      <el-table-column prop="desc" label="属性介绍" width="180"></el-table-column>
    </el-table>
    <span>
      animation: name(指定要绑定到选择器的关键帧的名称) duration( 动画指定需要多少秒或毫秒完成) timing-function(设置动画将如何完成一个周期
      ) delay(设置动画在启动前的延迟间隔)
       iteration-count(定义动画的播放次数。
      ) 
      direction(指定是否应该轮流反向播放动画)
       fill-mode(规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式) play-state(指定动画是否正在运行或已暂停);
    </span>
  </div>
</template>

<script>
export default {
  name: "animation",
  data() {
    return {
      tableData: [
        {
          property: "name",
          desc: "指定要绑定到选择器的关键帧的名称"
        },
        {
          property: "duration",
          desc: "动画指定需要多少秒或毫秒完成"
        },
        {
          property: "timing-function",
          desc: "设置动画将如何完成一个周期"
        },
        {
          property: "delay",
          desc: "设置动画在启动前的延迟间隔"
        },
        {
          property: "iteration-count",
          desc: "定义动画的播放次数"
        },
        {
          property: "direction",
          desc: "指定是否应该轮流反向播放动画"
        },
        {
          property: "fill-mode",
          desc: "规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式"
        },
        {
          property: "play-state",
          desc: "指定动画是否正在运行或已暂停"
        }
      ]
    }
  }
};
</script>

<style scoped>
.inner-title {
  font-weight: 600;
  color: rgb(73, 163, 113);
}
</style>