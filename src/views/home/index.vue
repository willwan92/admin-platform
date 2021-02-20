<template>
  <div class="home-container">
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="">
          <div class="progress-item">
            <span>CPU</span>
            <el-progress :percentage="70" />
          </div>
          <div class="progress-item">
            <span>内存</span>
            <el-progress :percentage="18" />
          </div>
          <div class="progress-item">
            <span>系统空间</span>
            <el-progress :percentage="12" />
          </div>
          <div class="progress-item">
            <span>存储空间</span>
            <el-progress :percentage="100" status="success" />
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="">
          <!-- <pie-chart /> -->
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="">
          <!-- <bar-chart /> -->
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
        <!-- <transaction-table /> -->
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <!-- <todo-list /> -->
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <!-- <box-card /> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style lang="scss" scoped>
.home {
  &-container {
    margin: 30px;

    .progress-item {
      margin-bottom: 10px;
      font-size: 14px;
    }
  }
}
</style>
