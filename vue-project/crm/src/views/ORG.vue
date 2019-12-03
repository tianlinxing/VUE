<template>
  <div>
    <el-container>
      <el-aside width="200px" style="background: #545c64; overflow: hidden">
        <div class="asideBox">
          <el-row class="tac">
            <el-col>
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
              >
                <el-submenu v-for="(item, index) in menuList" :key="index" :index="item[0].meta.id">
                  <template slot="title">
                    <i :class="item[0].meta.icon"></i>
                    <span>{{item[0].meta.rootTil}}</span>
                  </template>
                  <el-menu-item
                    :index="index+'-'+i"
                    v-for="(v, i) in item"
                    :key="index+'-'+i"
                  >{{v.meta.til}}</el-menu-item>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </div>
      </el-aside>
      <el-main>ORG --- Main</el-main>
    </el-container>
  </div>
</template>
<script>
import ary from "@/router/org.js";
// @ is an alias to /src
export default {
  name: "org",
  data() {
    return {
      menuList: []
    };
  },
  created() {
    let t = [ary[0]]; // 把6项拆成3项
    ary.reduce((pre, cur) => {
      if (pre.meta.type === cur.meta.type) {
        t.push(cur);
      } else {
        this.menuList.push(t);
        t = [cur];
      }
      return cur;
    });
    this.menuList.push(t);
    console.log(this.menuList);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: {}
};
</script>
<style lang="less">
.asideBox {
  height: 100%;
  width: 110%;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>