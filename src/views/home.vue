<template>
  <div id="home">
    <!-- 组件 -->
    <topBar></topBar>

    <!-- 2.0 过渡 -->

    <transition name="fade">
      <loading v-show="isLoading"></loading>
    </transition>
    <!-- 列表渲染 -->
    <ul>
      <li class="card" v-for="item in homeData.results" @click="goTo(item.url)">
        <div class="card-info">
          <p class="card-desc">{{item.desc}}</p>
          <p class="card-date">{{item.publishedAt | moment}}</p>
          <p class="card-from"> {{item.source}}
          </p>
          <p class="card-author">
            Author: {{item.who}}
          </p>
        </div>

      </li>
    </ul>

    <div class="random-button" @click="randomList" v-show="showR">❖</i></div>
  </div>
</template>

<script>
  /* eslint-disable */

  import topBar from '../components/topBar';
  import loading from '../components/loading'


  export default {
    name: 'home',
    components: {
      topBar,
      loading
    },
    data () {
      return {
        isLoading: false,
        homeData: {},
        startY: '',
        endY: '',
        showR: true
      }
    },
    watch: {
      '$route': 'fetchData'
    },
    created () {
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      this.fetchData();
    },
    filters: {
      moment: function (value) {
        return value.split('T')[0];
      }
    },
    methods: {
      getInfo: function () {
//        显示加载
        this.isLoading = true;
        this.$http.get('http://gank.io/api/random/data/%E5%89%8D%E7%AB%AF/20').then(function (resp) {
          console.log(resp)
          if (resp.ok) {
            this.homeData = resp.data;

//        隐藏加载
            this.isLoading = false;
          }
        }, function (resp) {
          console.log("网络链接有问题,3s后将自动重试");
          var self = this;
          setTimeout(function () {
              self.getInfo();
            },
            3000)
        });
      },
      fetchData: function () {
        console.log('home');
        this.getInfo();
      },
      goTest: function () {
        this.$router.push({
          name: 'about'
        })
      },
      goTo: function (url) {
        window.location.href = url;
      },
      randomList: function () {
        this.getInfo();
      },
      cltest: function () {
        console.log('test')
      }
    },
    mounted: function () {
//      replace ready

//      函数节流
//      js 滚动
//      var throttled = _.throttle(this.cltest, 1000);
//      window.onscroll = function () {
//        throttled();
//      };

    }
  }
</script>

<style src="../assets/css/home.scss" lang="scss" scoped></style>
