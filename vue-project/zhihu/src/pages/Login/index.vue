<template>
  <div class="loginBox">
    <header>
      <span class="lt" @click="close">X</span>
      <div class="rt">免密码登录</div>
    </header>

    <h2>密码登录</h2>
    <div class="inpBox">
      <input type="text" placeholder="请输入用户名或者手机号" v-model="name" />
      <input type="password" placeholder="请输入密码" v-model="psw" />
    </div>

    <div class="loginBtn" @click="login">登录</div>
    <div class="clearfix help">
      <div class="lt">海外手机号登录</div>
      <div class="rt">需要帮助</div>
    </div>

    <div class="otherLogin">
      <div>微信</div>
      <div>QQ</div>
      <div>新浪</div>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/login.js";

export default {
  data() {
    return {
      name: "",
      psw: ""
    };
  },
  methods: {
    close() {
      // 点击关闭按钮回到原来的页面
      this.$router.back();
    },
    login() {
      if (!this.name || !this.psw) {
        alert("用户名密码不能为空！");
        return;
      }
      login({
        name: this.name,
        password: this.psw
      })
        .then(data => {
          // 登录成功之后 我们把后台给的token 存储到localStange中
          // 由于本地等不一定能成功 所以我们在失败的时候也干了成功的事
          localStorage.setItem("token", "dfhfdhjhdfhuifhdiuh");
          this.$store.commit("stateChange", { loginState: true });
          this.$router.back();
          console.log(data);
        })
        .catch(err => {
          console.log(err);
          localStorage.setItem("token", "dfhfdhjhdfhuifhdiuh");
          this.$store.commit("stateChange", { loginState: true });
          this.$router.back();
        });
    }
  }
};
</script>

<style lang="less" scoped>
.loginBox {
  padding: 10vw;
  > header {
    overflow: hidden;
  }

  h2 {
    height: 30vw;
    font-size: 7vw;
    line-height: 30vw;
  }

  .inpBox {
    input {
      border: none;
      border-bottom: 1px solid #ccc;
      width: 80vw;
      margin: auto;
      display: block;
      height: 15vw;
      font-size: 5vw;
    }
  }

  .loginBtn {
    width: 80vw;
    height: 15vw;
    line-height: 15vw;
    text-align: center;
    background: rgba(42, 128, 214, 0.4);
    color: #fff;
    font-size: 7vw;
    margin: 10vw auto;
  }

  .loginBtn:hover {
    background: rgba(42, 128, 214, 1);
  }

  .help {
    width: 80vw;
    margin: 10vw auto;
  }

  .otherLogin {
    width: 80vw;
    display: flex;
    position: fixed;
    bottom: 10vw;
    left: 10vw;
    > div {
      flex: 1;
      text-align: center;
      font-size: 5vw;
    }
  }
}
</style>