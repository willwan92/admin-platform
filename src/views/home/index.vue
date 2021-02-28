<template>
  <div class="home-container">
    <el-row :gutter="24" class="row">
      <el-col :xs="24" :sm="24" :lg="12">
        <el-card>
          <div slot="header">
            <span>系统资源</span>
            <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
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
          </div>
          <descriptions :col="2">
            <description-item term="产品名称">
              工业安全网关
            </description-item>
            <description-item term="产品型号">
              SG-9000
            </description-item>
            <description-item term="版本号">
              1.2
            </description-item>
            <description-item term="序列号">
              fd9u0fdaf098fasjfsad09iu
            </description-item>
            <description-item term="运行时间">
              11小时23分钟
            </description-item>
          </descriptions>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="24">
      <el-col :xs="24" :sm="24" :lg="12">
        <el-card header="">
          <div slot="header">
            <span>系统事件</span>
            <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
          </div>
          <event-table class="table-in-card" />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <el-card>
          <div slot="header">
            <span>网络接口</span>
            <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
          </div>
          <interface-table class="table-in-card" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EventTable from './components/EventTable'
import InterfaceTable from './components/InterfaceTable'
import Descriptions from '@/components/Descriptions'
const DescriptionItem = Descriptions.Item

export default {
  name: 'Home',
  components: {
    EventTable,
    InterfaceTable,
    Descriptions,
    DescriptionItem
  },
  data() {
    return {
      sysResource: {
        cpu: 23,
        memory: 72,
        sysDisk: 12,
        disk: 91
      }
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  methods: {
    status(value) {
      if (value > 80) {
        return 'exception'
      } else {
        return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
.home {
  &-container {
    margin: 30px;
    .row {
      margin-bottom: 24px;
      .table-in-card {
        margin-top: 40rpx;
      }
    }
    .progress-item {
      margin-bottom: 12px;
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
