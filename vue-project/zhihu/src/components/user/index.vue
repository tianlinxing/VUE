<template>
  <div>
    <header>
      <input type="text" />
      <span>扫描</span>
      <span @click="change">{{loginState ? '退出' : '登录'}}</span>
    </header>
    <in v-if="loginState"></in>
    <no-in v-else></no-in>
  </div>
</template>
<script>
import { mapState } from "vuex";
import In from "./in";
import NoIn from "./noin";
// @ is an alias to /src
export default {
  name: "user",
  data() {
    return {};
  },

  computed: {
    ...mapState(["loginState"])
  },

  methods: {
    change() {
      console.log(this.loginState)
      if (this.loginState) {
        // 当前是登录 我们要退出
        localStorage.removeItem("token");
        this.$store.commit("stateChange", { "loginState": false });
      } else {
        // 当前没有登录 我们要登录
        this.$router.push("/login");
      }
    }
  },

  components: {
    in: In,
    "no-in": NoIn
  }
};
</script>
<style lang="less">
</style>