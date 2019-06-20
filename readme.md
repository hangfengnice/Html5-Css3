# html5-css3

- 表单
  - `oninvalid` 验证不成功时触发 设置`setCustomValidity()`输出默认样式
  - `progress` `meter` 这两个标签两者的功能类似进度条
  - required属性 使当前input框必填
  - `autocomplete` `pattern` 属性

  ```html
  <!-- 
    实现 autocomplete 
     1. 需要提交过
     2. 需要有name 属性
  -->
  
  用户名: <input type="text" name='name'autocomplete="off"><br>
  <!-- pattern : 正则验证 -->
  手机号: <input type="tel" required pattern='^(\+86)?1\d{10}$'>
  ```

- 网络
  - `ononline` `onoffline` 

- 线性渐变 径向渐变 重复渐变

```html
<!-- 方向: 
to top: 0deg;
to right: 90deg;
to bottom: 180deg;
to left: 270deg; -->
linear-gradient(方向, 开始颜色 位置,颜色2 位置, 颜色3 位置..)
```

- 全屏接口
  - requestFullscreen()
  - exitFullscreen()
  - 全屏幕 fullscreenElement
