<template>
  <div>
    <h3>debounce</h3>
    <button>reset</button>
    <button>debounce</button>
    <p class='para' ref='p'>鼠标移动， 数字改变，选择方式</p>
    <p>{{number}}</p>
    <pre>
      function debounce(func, wait) {
        let timer
        return function () {
          if (timer) {
            return
          }
          let args = [].slice.call(arguments)
          timer = setTimeout(() => {
            clearTimeout(timer)
            func.apply(this, args)
          }, wait)
        }
      }
    </pre>
    <h3>throttle</h3>
    <pre>

    </pre>
  </div>
</template>

<script>

export default {
  name: "debouncethrottle",
  data () {
    return {
      number: 0,
      mode: 'normal'
    }
  },
  mounted() {
    console.log(this.$refs.p);
    this.$refs.p.addEventListener('mousemove', this.numberAdd)
  },
  methods: {
    numberAdd() {
      if (this.mode === 'normal') {
        this.number = this.number + 1
      }
    }
  }
}
</script>

<style scoped>
  .para {
    width: 300px;
    height: 300px;
    background-color: rgb(75, 206, 134);
  }
</style>