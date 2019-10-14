<template>
  <div>
    <button
      class="button"
      @click="styleChange"
      :class="{white: isWhiteOrRed, green: !isWhiteOrRed}"
    >点击我 改变颜色</button>
    <p>transition的属性 👇</p>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="property" label="属性" width="180"></el-table-column>
      <el-table-column prop="desc" label="属性介绍" width="180"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "transition",
  data() {
    return {
      isWhiteOrRed: true,
      tableData: [
        {
          property: "transition-property",
          desc: "css属性 || all || none"
        },
        {
          property: "transition-duration",
          desc: "持续时间"
        },
        {
          property: "transition-timing-function",
          desc: "效果曲线(默认ease)"
        },
        {
          property: "transition-delay",
          desc: "(延迟) 的一个简写属性"
        }
      ]
    };
  },
  methods: {
    styleChange() {
      this.isWhiteOrRed = !this.isWhiteOrRed;
    }
  }
};
</script>

<style scoped>
.button {
  outline: none;
  border: none;
  transition: all 1s ease;
}
.white {
  color: #fff;
  border-radius: 4px;
  background-color: rgb(72, 194, 109);
}
.green {
  color: rgb(72, 194, 109);
  border-radius: 4px;
}
</style>