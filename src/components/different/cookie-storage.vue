<template>
  <div>
    <h6>3.1 cookie 的属性以及描述</h6>
      <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="property"
      label="属性"
      width="180">
    </el-table-column>
    <el-table-column
      prop="desc"
      label="描述"
      >
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
   name: "cookie",
   data() {
      return {
        tableData: [{
          property: 'Expires',
          desc: '指定一个具体的到期时间，到了指定时间以后，浏览器就不再保留这个 Cookie; 值是 UTC 格式，可以使用Date.prototype.toUTCString()进行格式转换',
        }, {
          property: 'Max-Age',
          desc: '从现在开始 Cookie 存在的秒数，比如60 * 60 * 24 * 365（即一年）。过了这个时间以后，浏览器就不再保留这个 Cookie',
        }, {
          property: 'Secure',
          desc: '浏览器只有在加密协议 HTTPS 下，才能将这个 Cookie 发送到服务器',
        }, {
          property: 'HttpOnly',
          desc: 'document.cookie属性、XMLHttpRequest对象和 Request API 都拿不到该属性',
        }]
      }
    }
}
</script>

<style>

</style>