<template>
  <el-card class="card" header="配置管理">
      <el-form v-model="timeForm" label-width="100px">
        <el-form-item label="导出加密">
          <el-radio-group v-model="encrypted">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">导出配置</el-button>
          <el-upload
            class="upload"
            action=""
            :auto-upload="false">
            <el-button>导入配置</el-button>
          </el-upload>
          <el-button>恢复默认配置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
</template>

<script>
export default {
  data () {
    return {
      encrypted: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.upload {
  display: inline-block;
  margin: 0 10px;
}
</style>
