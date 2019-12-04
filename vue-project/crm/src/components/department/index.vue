<template>
  <div>
    <el-table :data="tableData" style="width: 100%; height: 100%" stripe border>
      <el-table-column label="编号" width="180" type="index" :index="indexMethod" align="center"></el-table-column>
      <el-table-column label="名称" width="180" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="描述" align="center">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>名称: {{ scope.row.name }}</p>
            <p>描述: {{ scope.row.desc }}</p>
            <div slot="reference" class="name-wrapper">{{ scope.row.desc }}</div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="200">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { delDpList } from "@/api/index.js";
// @ is an alias to /src
export default {
  name: "department",
  data() {
    return {};
  },

  created() {
    this.$store.dispatch("changeDpList");
  },
  computed: {
    tableData() {
      return this.$store.state.departmentList;
    }
  },
  methods: {
    handleEdit(row) {
      // this.$router.push("/org/addDepartment");
      console.log(row.id);
      this.$router.push({ path: "/org/addDepartment", query: { id: row.id } });
    },
    handleDelete(row) {
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // 点击了确认按钮
          // 调用了 api中的 delDpList
          delDpList(row.id).then(data => {
            if (data.code === 0) {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              // 后端删除
              this.$store.dispatch("changeDpList");
              // 前端删除
              // let newData = this.tableData.filter(item => {
              //   item.id != row.id;
              // });
              // this.$store.commit("changeDpList", { data: newData });
            } else {
              this.$message({
                type: "error",
                message: "删除失败!"
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    indexMethod(index) {
      return index + 1;
    }
  },
  components: {}
};
</script>
<style lang="less">
</style>