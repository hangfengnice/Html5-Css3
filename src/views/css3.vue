<template>
  <div>
    <h3 class='css3-header'>css3特性 小谈</h3>
    <section>
      <p class='title'>1. transition</p>
      <Transition />
    </section>
    <section>
      <p class='title'>2. animation (动画)</p>
      <Animation />
    </section>
  </div>
</template>

<script>
import Transition from '../components/css3/transition'
import Animation from '../components/css3/animation'


export default {
  name: "css3",
  components: {
    Transition,
    Animation
  }
}
</script>

<style scoped>
  .css3-header {
    text-align: center;
  }
  .title {
    font-weight: 600;
    font-size: 18px;
  }
</style>
