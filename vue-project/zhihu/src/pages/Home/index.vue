<template>
  <div class="mainPage">
    <div>
      <router-view></router-view>
    </div>
    <nav class="navBox">
      <div>
        <router-link to="/homePage">
          <i class="iconfont icon-shouyejiedan"></i>
          <div>首页</div>
        </router-link>
      </div>

      <div>
        <router-link to="/vip">
          <i class="iconfont icon-huiyuan"></i>
          <div>会员</div>
        </router-link>
      </div>
      <div>
        <i class="iconfont icon-tianjia add" @click="show"></i>
      </div>
      <div>
        <router-link to="notify">
          <i class="iconfont icon-tongzhi"></i>
          <div>通知</div>
        </router-link>
      </div>
      <div>
        <router-link to="user">
          <i class="iconfont icon-denglu"></i>
          <div>{{loginState ? "我的" : "未登录"}}</div>
        </router-link>
      </div>
    </nav>
    <my-dialog @close="close" :isshow="flag"></my-dialog>
  </div>
</template>
<script>
import { mapState } from "vuex";
import dialog from "@/components/dialog.vue";
// @ is an alias to /src
export default {
  name: "Login",
  data() {
    return {
      flag: false
    };
  },
  created() {
    if (!localStorage.getItem("token")) {
      // this.$router.push('/login');
    }
  },
  methods: {
    show() {
      this.flag = true;
    },
    close() {
      this.flag = false;
    }
  },
  computed: {
    ...mapState(["loginState"])
  },
  components: {
    "my-dialog": dialog
  }
};
</script>
<style lang="less" scoped>
// scoped 只对当前样式 当前模版起作用
.mainPage > div {
  // font-size: 18px;
  padding-bottom: 18vw;
}
nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 18vw;
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
  background: #fff;
  > div {
    flex: 1;
    text-align: center;
    > a {
      color: #333;
      width: 100%;
      height: 100%;
      i {
        font-size: 7vw;
        font-weight: 800;
      }

      div {
        font-size: 4vw;
      }
    }

    i.add {
      font-size: 10vw;
      color: aqua;
    }

    a.router-link-active {
      color: gold;
    }
  }
}
</style>