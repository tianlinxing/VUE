<template>
  <el-aside width="200px" style="background: #545c64; overflow: hidden">
    <div class="asideBox">
      <el-row class="tac">
        <el-col>
          <el-menu default-active="2" class="el-menu-vertical-demo" background-color="transparent">
            <el-submenu
              v-for="(item, index) in menuList"
              :key="index"
              :index="index+''"
              class="mycolor"
            >
              <template slot="title">
                <i :class="item[0].meta.icon"></i>
                <span>{{item[0].meta.rootTil}}</span>
              </template>
              <router-link tag="span" :to="v.path" v-for="(v, i) in item" :key="index+'-'+i">
                <el-menu-item :index="index+'-'+i">{{v.meta.til}}</el-menu-item>
              </router-link>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </el-aside>
</template>
<script>
// @ is an alias to /src
export default {
  name: "my-aside",
  props: ["ary"],
  data() {
    return {
      menuList: [],
      power: localStorage.getItem("power")
    };
  },
  created() {
    this.menuInit();
  },
  methods: {
    menuInit() {
      let t = [this.ary[0]]; // 把6项拆成3项
      this.ary.reduce((pre, cur) => {
        if (pre.meta.type === cur.meta.type) {
          t.push(cur);
        } else {
          this.menuList.push(t);
          t = [cur];
        }
        return cur;
      });
      this.menuList.push(t);
      // 权限判断
      // v-if="power.indexOf(item[0].meta.power)!=-1"
      this.menuList = this.menuList.filter(item => {
        if (!this.power) return false; // 若不存在power 则数组为空即可
        return this.power.includes(item[0].meta.power);
      });

      // 权限校验完成之后 设置默认路径
      let url = this.menuList[0] && this.menuList[0][0].path;
      let ary = this.$route.path.split("/");
      if (ary.length > 2 && ary.pop().length > 0) {
        // 说明路径是在二级路径下，这时什么也不做
        // ary.length>2 说明至少有两个 /
        // ary.pop().length>0 说明最后一项的长度不是0， 也就是第二个后边有内容也就是当前是二级路由
      } else {
        this.$router.push(url);
      }
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.mycolor {
  span,
  li {
    color: #fff;
  }
}
.router-link-active {
  .el-menu-item {
    color: aquamarine;
  }
}

.asideBox {
  height: 100%;
  width: 110%;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>