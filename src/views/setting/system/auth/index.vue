<template>
  <el-card>
    <div slot="header" class="clearfix">
    <span>授权管理</span>
    <span style="float: right;">
      <el-upload
        class="upload"
        action=""
        :auto-upload="false">
        <el-button type="text" class="button" icon="el-icon-upload2">导入授权文件</el-button>
      </el-upload>
      <el-button type="text" class="button" icon="el-icon-download">导出授权文件</el-button>
    </span>
  </div>
  <el-table :data="tableData" border>
    <el-table-column width="150px" label="授权模块" prop="module">
    </el-table-column>
    <el-table-column label="授权时间" prop="startTime">
    </el-table-column>
    <el-table-column label="终止时间" prop="endTime">
    </el-table-column>
  </el-table>
</el-card>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    }
  }
}
</script>

<style lang="scss" scoped>
.upload {
  display: inline-block;
  margin-right: 10px;
}
.button {
  padding-top: 0; padding-bottom: 0;
}
</style>

