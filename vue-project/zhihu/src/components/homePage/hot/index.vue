<template>
  <div class="hotBox">
    <van-tabs type="card" v-model="index" @change="getList">
      <van-tab v-for="item in ary" :key="item.type" :title="item.til">
        <my-item v-for="(item, num) in hotList" :key="item.ts" :data="item" :index="num"></my-item>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Item from "./item";
import { mapState } from "vuex";
// import { hotList } from "@/api/home.js";
// @ is an alias to /src
export default {
  name: "hot",
  data() {
    return {
      ary: [
        {
          til: "推荐",
          type: "tuijian"
        },
        {
          til: "科技",
          type: "keji"
        },
        {
          til: "教育",
          type: "jiaoyu"
        },
        {
          til: "娱乐",
          type: "yule"
        },
        {
          til: "汽车",
          type: "qiche"
        },
        {
          til: "金融",
          type: "jinrong"
        },
        {
          til: "体育",
          type: "tiyu"
        }
      ],
      index: 0,
      oldType: "",
      flag: true
    };
  },
  created() {
    this.getList();
    window.onscroll = () => {
      if (!this.flag) return;
      this.getMore();
    };
  },
  beforeDestroy() {
    window.onscroll = null;
  },
  methods: {
    getList() {
      this.$store
        .dispatch("getHotList", {
          newType: this.ary[this.index].type,
          oldType: this.oldType, // 旧值怎么保存
          count: 10,
          reload: true,
          category: this.ary[this.index].type
        })
        .then(() => {
          this.flag = true;
        });
      this.oldType = this.ary[this.index].type; // 更新oldType
      console.log(this.$store.state.hotList);
    },
    getMore() {
      let app = document.getElementById("app");
      let cTop =
        document.documentElement.clientHeight || document.body.clientHeight;
      let sTop = document.documentElement.scrollTop;
      if (app.clientHeight <= sTop + cTop + 50) {
        this.flag = false;
        this.getList();
      }
    }
  },
  components: {
    "my-item": Item
  },
  computed: {
    ...mapState(["hotList"]) // 把hotList列表从vuex中 拿到本组件
  }
};
</script>
<style lang="less">
.hotBox {
  padding-top: 3vw;
  text-align: left;
  .van-tabs__nav--card {
    border: none;
  }
  .van-tabs__nav--card .van-tab {
    border: none;
    border-radius: 2px;
    color: #646464;
    background-color: #f6f6f6;
    margin: 0 1vw;
    line-height: 30px;
    flex-basis: 18% !important;
  }
  .van-tabs__nav--card .van-tab.van-tab--active {
    font-weight: 500;
    color: #0084ff;
    background-color: rgba(0, 132, 255, 0.1);
  }
}
</style>