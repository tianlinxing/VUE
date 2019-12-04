<template>
  <div class="addBox">
    <el-form ref="form" :model="form" label-width="80px" class="myform">
      <el-form-item label="姓名" style="width:300px">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.resource">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="邮箱" style="width:300px">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="电话" style="width:300px">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="部门">
        <el-select v-model="form.region" placeholder="请选择部门">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="职务">
        <el-select v-model="form.region" placeholder="请选择职务">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
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
// @ is an alias to /src
export default {
  name: "addUser",
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "男",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  },
  components: {}
};
</script>