<template>
  <div id="about">
    <topBar></topBar>

    <div class="about">
      <p>基于vue-cli</p>
      <br>
      <br>
      <p class="author">Author: <a href="mailto:wangzhiheng703@gmail.com"></a> wangzhiheng703@gmail.com</p>
      <p>api 由 <a href="http://gank.io">gank.io</a> 提供</p>

    </div>
  </div>
</template>

<script>
  import topBar from '../components/topBar.vue'

  export default {
    name: 'test',
    components: {
      topBar
    },
    // define methods under the `methods` object
    watch: {
      '$route': 'fetchData'
    },
    methods: {

      fetchData: function () {
        console.log('test!')
      }

    }
  }
</script>

<style src="../assets/css/about.scss" lang="scss" scoped>
</style>
