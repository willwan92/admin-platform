<template>
  <el-card header="管理方式设置">
    <el-form v-model="form" label-width="120px">
      <el-form-item label="web 超时时间">
        <el-select v-model="timeout" placeholder="请选择">
          <el-option
            v-for="item in timeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="远程 SSH 管理">
        <el-switch v-model="ssh">
        </el-switch>
      </el-form-item>
      <el-form-item label="证书管理">
        <el-switch v-model="cert">
        </el-switch>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      timeOptions: [
        {
          label: '10分钟',
          value: 10
        },
        {
          label: '15分钟',
          value: 15
        },
        {
          label: '20分钟',
          value: 20
        },
        {
          label: '30分钟',
          value: 30
        },
        {
          label: '1小时',
          value: 60
        },
        {
          label: '24小时',
          value: 1440
        }
      ],
      timeout: 10,
      ssh: true,
      cert: true
    }
  }
}
</script>
