<template>
  <el-form ref="form" :model="form" label-width="80px" class="myForm">
    <el-form-item label="活动名称" style="width: 300px">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="活动形式" style="width: 500px">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item label="活动性质">
      <el-checkbox-group v-model="power">
        <el-checkbox label="userhandle" name="type">员工操作权</el-checkbox>
        <el-checkbox label="departhandle" name="type">部门操作权</el-checkbox>
        <el-checkbox label="jobhandle" name="type">职务操作权</el-checkbox>
        <el-checkbox label="departcustomer" name="type">部门全部客户</el-checkbox>
        <el-checkbox label="allcustomer" name="type">公司全部客户</el-checkbox>
        <el-checkbox label="resetpassword" name="type">重置密码</el-checkbox>
      </el-checkbox-group>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
  
<script>
import { addJobList, getJobList } from "@/api/index.js";
export default {
  data() {
    return {
      form: {
        power: "",
        name: "",
        desc: ""
      },
      id: "",
      ary: ["userhandle", "jobhandle"]
    };
  },
  methods: {
    onSubmit() {
      // let id = this.$route.query.id
      (this.id ? getJobList : addJobList)(this.form).then(data => {
        if (data.code == 0) {
          this.$message({
            type: "success",
            message: (this.id ? "更新" : "添加") + "成功!"
          });
          this.$router.push("/org/job");
        } else {
          this.$message.error("添加失败");
        }
      });
    }
  },
  computed: {
    power: {
      get() {
        // 把后台给的字符串转成数组
        return this.form.power.split("|");
      },
      set(val) {
        // val 更改过的数组
        this.form.power = val.join("|");
      }
    }
  },
  created() {
    let id = (this.id = this.$route.query.id);
    let obj = this.$store.state.jobList.filter(item => item.id == id)[0];
    console.log(obj, 111);
    this.form = obj ? obj : this.form;
  },
  watch: {
    $route(newVal, oldVal) {
      console.log(newVal, oldVal);
      if (!newVal.query.id) {
        this.form.power = "";
        this.form.name = "";
        this.form.desc = "";
      }
    }
  }
};
</script>
<style lang="less">
.myForm {
  text-align: left;
  padding: 20px;
  box-sizing: border-box;
}
</style>