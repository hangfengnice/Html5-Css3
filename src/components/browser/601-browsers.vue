<template>
  <el-table
    :data="tableData"
    stripe  
    style="width: 100%">  <!-- stripe 斑马线 -->
    <el-table-column
      prop="core"
      label="浏览器内核"
      width="180">
    </el-table-column>
    <el-table-column
      prop="main-browser"
      label="浏览器"
      width="180">
    </el-table-column>
    <el-table-column
      prop="prefix"
      label="前缀"
      width="180">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          core: 'Trident',
          "main-browser": 'IE',
          prefix: '-ms'
        }, {
          core: 'Gecko',
          "main-browser": 'firefox',
          prefix: '-moz'
        }, {
          core: 'Presto',
          "main-browser": 'opera',
          prefix: '-o'
        }, {
          core: 'blink',
          "main-browser": 'chrome',
          prefix: '-webkit'
        },{
          core: 'webkit',
          "main-browser": 'Safari',
          prefix: '-webkit'
        }]
      }
    }
  }
</script>
