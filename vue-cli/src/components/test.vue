<template>
  <h2 class="test">this test vue {{msg}}</h2>
</template>

<script>
export default {
  name: 'testVue',
  props:{
    msg: {
      type: String,
      default: 'test msg'
    }
  },
  methods:{

  }
}
</script>

<style scoped>
  .test {
    font-size: 40px;
    color: gray;
  }
</style>