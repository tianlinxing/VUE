<template>
  <div>
    <el-container>
      <my-aside :ary="ary"></my-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import ary from "@/router/org.js";
import nav from "@/components/nav.vue";
// @ is an alias to /src
export default {
  name: "org",
  data() {
    return {
        ary
    };
  },
  components: {
    "my-aside": nav
  }
};
</script>
<style lang="less" scoped>
.el-main {
   padding: 0;
   line-height: normal;   
}
</style>