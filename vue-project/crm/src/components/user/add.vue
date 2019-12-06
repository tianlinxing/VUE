<template>
  <div class="addBox">
    <el-form ref="form" :model="form" label-width="80px" class="myform">
      <el-form-item label="姓名" style="width:300px">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.sex">
          <el-radio label="0">男</el-radio>
          <el-radio label="1">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="邮箱" style="width:300px">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="电话" style="width:300px">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="部门">
        <el-select v-model="form.departmentId" placeholder="请选择部门">
          <el-option
            v-for="item in departmentList"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="职务">
        <el-select v-model="form.jobId" placeholder="请选择职务">
          <el-option v-for="item in jobList" :key="item.id" :label="item.name" :value="item.power"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="自我介绍" style="width:300px">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { addUserList } from "@/api/index.js";
import { mapState } from "vuex";
// @ is an alias to /src
export default {
  name: "addUser",
  data() {
    return {
      form: {
        name: "",
        sex: 0,
        email: "",
        phone: "",
        departmentId: 1,
        jobId: 1,
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      addUserList(this.form).then(data => {
        console.log(data);
      });

      console.log("submit!");
    }
  },
  created() {
    // 在这调用action中的方法， 该方法调用接口 获取数据 成功后调用
    // mutations中对应的方法 然后把state中的数据修改
    // state中的数据修改之后 触发当前组件的视图更新
    this.$store.dispatch("changeJobList");
    let obj = this.userList.filter(item => item.id == this.$route.query.id)[0];
    this.form = obj || this.form;
    this.form.departmentId *= 1;
    this.form.jobId *= 1; // 把两个ID统一成数字
  },
  computed: {
    // departmentList() {
    //   return this.$store.state.departmentList;
    // },
    // jobList() {
    //   return this.$store.state.jobList;
    // },
    ...mapState(["departmentList", "jobList", "userList"])
  },
  components: {}
};
</script>