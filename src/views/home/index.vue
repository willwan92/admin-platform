<template>
  <div class="home-container">
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="12">
        <el-card>
          <div slot="header">
            <span>系统资源</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
          </div>
          <div class="progress-item">
            <span class="label">CPU：</span>
            <el-progress class="progress" :text-inside="true" :stroke-width="16" :percentage="sysResource.cpu" :status="status(sysResource.cpu)" />
          </div>
          <div class="progress-item">
            <span class="label">内存：</span>
            <el-progress class="progress" :text-inside="true" :stroke-width="16" :percentage="sysResource.memory" :status="status(sysResource.memory)" />
          </div>
          <div class="progress-item">
            <span class="label">系统空间：</span>
            <el-progress class="progress" :text-inside="true" :stroke-width="16" :percentage="sysResource.sysDisk" :status="status(sysResource.sysDisk)" />
          </div>
          <div class="progress-item">
            <span class="label">存储空间：</span>
            <el-progress class="progress" :text-inside="true" :stroke-width="16" :percentage="sysResource.disk" :status="status(sysResource.disk)" />
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <el-card>
          <div slot="header">
            <span>设备信息</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
          </div>
          <el-row>
            <el-col :span="6">产品名称</el-col>
            <el-col :span="6">工业安全网关</el-col>
            <el-col :span="6">产品型号</el-col>
            <el-col :span="6">SG-9000</el-col>
          </el-row>
          <el-row>
            <el-col :span="6">版本号</el-col>
            <el-col :span="6">1.2</el-col>
            <el-col :span="6">序列号</el-col>
            <el-col :span="6">fd9u0fdaf098fasjfsad09iu</el-col>
          </el-row>
          <el-row>
            <el-col :span="6">运行时间</el-col>
            <el-col :span="6">11小时23分钟</el-col>
            <el-col :span="6"></el-col>
            <el-col :span="6"></el-col>
          </el-row>
        </el-card>
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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/user'

@Component({
  name: 'Home'
})
export default class extends Vue {
  private sysResource = {
    cpu: 23,
    memory: 72,
    sysDisk: 12,
    disk: 91
  }

  private status(value: number) {
    if (value > 80) {
      return 'exception'
    } else {
      return ''
    }
  }

  get name() {
    return UserModule.name
  }

  get roles() {
    return UserModule.roles
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
      @include clearfix;

      .label {
        float: left;
        width: 80px;
      }

      .progress {
        margin-left: 80px;
      }
    }
  }
}
</style>
