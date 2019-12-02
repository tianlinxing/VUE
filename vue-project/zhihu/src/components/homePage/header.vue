<template>
  <div class="headerBox">
    <div>
      <van-icon name="video-o" class="lt" />
      <van-search placeholder="请输入搜索关键词" v-model="value" />
      <van-icon name="calender-o" class="rt" />
    </div>
   
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "myHeader",
  data() {
    return {
      value: "",
      active: 2
    };
  },
  components: {}
};
</script>
<style lang="less">
.headerBox {
  > div:nth-child(1) {
    display: flex;
    align-items: center;
    > .lt,
    > .rt {
      text-align: right;
      width: 13vw;
      font-size: 8vw;
    }

    > .rt {
      text-align: left;
    }
    > div {
      flex: auto;
    }
  }
}
</style>