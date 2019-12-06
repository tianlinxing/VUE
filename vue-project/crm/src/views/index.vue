<template>
  <div>
    <el-container>
      <el-header class="clearfix">
        <h2 class="lt">CRM客户管理系统</h2>
        <div class="topTabBox lt">
          <div class="lt">
            <router-link to="/org" tag="span">组织结构</router-link>
          </div>
          <div class="lt">
            <router-link to="/crm" tag="span">客户管理</router-link>
          </div>
        </div>
        <div class="userNameBox rt">
          <span>您好，珠峰培训</span>
          <span @click="logout">安全退出</span>
        </div>
      </el-header>
      <div class="middle_content_box">
        <router-view></router-view>
      </div>
      <el-footer class="footer_bottom">Footer</el-footer>
    </el-container>
  </div>
</template>
<script>
// 在该组件验证登录
import { judgeLogin } from "@/api/index.js";
import { signOut } from "@/api/login";
// @ is an alias to /src
export default {
  name: "home",
  data() {
    return {};
  },

  created() {
    judgeLogin().then(flag => {
      // 若flag是false 代表登录状态是失败的
      if (!flag) {
        this.$router.push("/login");
      }
    });
  },
  components: {},
  methods: {
    logout() {
      signOut().then(data => {
        if (data.code == 0) {
          this.$router.push("/login");
        }
      });
    }
  }
};
</script>
<style lang="less">
.topTabBox {
  padding: 0 60px;
  > div {
    margin: 0 20px;
    cursor: pointer;
    color: #eee;
    box-sizing: border-box;
    &:hover {
      color: #fff;
      &::after {
        content: "";
        display: block;
        width: 100%;
        position: relative;
        bottom: 3px;
        border-bottom: 2px solid rgb(9, 209, 192);
      }
    }
    > span {
      display: block;
      width: 100%;
      height: 100%;
      font-size: 14px;
    }

    > span.router-link-active {
      color: rgb(9, 209, 192);
    }
  }
}
.userNameBox {
  > span {
    cursor: pointer;
    padding-left: 20px;
  }
}
.middle_content_box {
  position: absolute;
  top: 60px;
  bottom: 60px;
  width: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
  > div {
    height: 100%;
    .el-container {
      height: 100%;
    }
  }
}

.footer_bottom {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
}
.el-header,
.el-footer {
  background-color: rgb(78, 78, 78);
  color: #fff;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: rgb(136, 136, 136);
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
