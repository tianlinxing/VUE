<template>
  <div class="loginBox">
    <h2>CRM客户管理系统</h2>
    <h3>为保护企业的数据安全，请妥善保管密码</h3>
    <div class="clearfix">
      <el-input placeholder="请输入用户名" prefix-icon="el-icon-user" v-model="name" class="inp"></el-input>
      <el-input
        placeholder="请输入密码"
        prefix-icon="el-icon-lock"
        v-model="psw"
        show-password
        class="inp"
      ></el-input>
      <el-button type="primary" class="btn" @click="sign">登录</el-button>
      <div class="lt loginText">
        <p>账号 : admin 密码 : 随便填</p>
        <p>账号 : editor 密码 : 随便填</p>
      </div>
      <el-button type="primary" class="btn2 rt">第三方登录</el-button>
    </div>
    <p class="loginBottom">北京珠峰世纪技术培训有限公司 京ICP备09041920号 京公网安备110108400531号</p>
  </div>
</template>
<script>
import { login } from "@/api/login.js";
import MD5 from "md5";
// @ is an alias to /src
export default {
  name: "login",
  data() {
    return {
      name: "",
      psw: ""
    };
  },
  components: {},
  methods: {
    sign() {
      if (!this.name || !this.psw) {
        this.$message.error("用户名或者密码不能为空");
        return;
      }
      let obj = {
        account: this.name,
        password: MD5(this.psw)
      };
      login(obj).then(data => {
        // console.log(data);
        if(data.code === 0) {
          this.$alert('恭喜登录成功', '提示', {
            confirmButtonText: '确定',
            callback: action => {
              console.log(action)
              // action是告诉我们点击了哪个按钮
              this.$router.push('/');

            }
          })
        }
      });
    }
  }
};
</script>
<style lang="less">
.loginBox {
  width: 100%;
  height: 100%;
  background: rgb(68, 206, 141);
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  h2 {
    height: 60px;
    line-height: 60px;
    margin: 50px 0 20px 0;
    font-size: 28px;
    color: #fff;
  }

  h3 {
    font-weight: normal;
    color: #fff;
    margin-bottom: 40px;
  }

  > div {
    width: 400px;
    // height: 300px;
    margin: auto;
    box-shadow: 11px 11px 23px 5px rgb(23, 155, 93);
    .inp {
      width: 80%;
      margin: 20px auto 10px auto;
    }
    .btn {
      margin: 20px 0;
      width: 80%;
      color: #fff;
    }

    .loginText {
      margin-left: 40px;
      color: #fff;
      > p {
        margin-bottom: 5px;
      }
    }

    .btn2 {
      margin: 0 40px 10px 0;
      font-size: 12px;
      width: 23%;
      text-align: center;
    }
  }
  .loginBottom {
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 16px;
  }
}
</style>