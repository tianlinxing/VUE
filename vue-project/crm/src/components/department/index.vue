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
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.desc }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="200">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
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
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
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