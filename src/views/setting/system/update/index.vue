<template>
  <div>
    <el-card header="系统版本管理">
      <el-form v-model="form" label-width="100px">
        <el-form-item label="系统当前版本">
          <el-input :value="form.current" readonly />
        </el-form-item>
        <el-form-item label="系统出厂版本">
          <el-input :value="form.init" readonly />
        </el-form-item>
        <el-form-item>
          <el-upload
            class="upload"
            action=""
            :auto-upload="false">
          <el-button type="primary">升级系统</el-button>
          </el-upload>
          <el-button>恢复出厂版本</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card header="系统升级历史">
      <el-table :data="tableData" border>
        <el-table-column width="150px" label="系统历史版本" prop="version">
        </el-table-column>
        <el-table-column label="升级时间" prop="time">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        current: '1.0',
        init: '1.0'
      },
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
</style>
