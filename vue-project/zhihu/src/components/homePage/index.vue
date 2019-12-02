<template>
  <div>
    <my-header></my-header>

    <van-tabs
      class="top_tab"
      v-model="active"
      swipeable
      @change="change"
      line-width="35px"
      animated
    >
      <van-tab v-for="(item,index) in ary" :key="index" :title="item.til">
        <router-view></router-view>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Header from "./header";
// @ is an alias to /src
export default {
  name: "homePage",
  data() {
    return {
      //   active: 2,
      ary: [
        { til: "关注", to: "/homePage/focus" },
        { til: "推荐", to: "/homePage/recommend" },
        { til: "热榜", to: "/homePage/hot" }
      ]
    };
  },
  methods: {
    change(n) {
      console.log(this.ary[n].to);
      this.$router.push(this.ary[n].to);
    }
  },
  //   watch: {
  //     '$route'(to) {
  //       // 侦听路由的变化 第一次侦听不到
  //       console.log(to);
  //       this.ary.forEach((item, index) => {
  //         if (item.to === to.path) {
  //           this.active = index;
  //         }
  //       });
  //     }
  //   },
  computed: {
    active: {
      get() {
        return this.ary.findIndex(item => item.to === this.$route.path);
      },
      set() {}
    }
  },
  components: {
    "my-header": Header
  }
};
</script>
<style lang="less">
.van-tabs__wrap::after {
  border: none;
}
.top_tab > .van-tabs__wrap {
  box-shadow: 0px 4px 4px 0px #eee;
}
</style>