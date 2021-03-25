<template>
  <div>
    <el-card class="card" header="时间设置">
      <el-form v-model="timeForm" label-width="100px">
        <el-form-item label="本地时间">
          <el-input :value="timeForm.localTime" readonly />
        </el-form-item>
        <el-form-item label="系统时间">
          <el-input :value="timeForm.sysTime" readonly />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            title="同步本地时间到系统"
          >时间同步</el-button>
          <el-button
            @click="timeModalVisible = true"
          >修改系统时间</el-button>
        </el-form-item>
      </el-form>

      <!-- 修改系统时间 modal -->
      <el-dialog
        title="修改系统时间"
        width="400px"
        :visible.sync="timeModalVisible"
      >
        <el-date-picker
          type="datetime"
          format="yyyy-MM-DD HH:mm:ss"
          v-model="newSysTime"
          placeholder="请选择日期时间"
        />
        <span slot="footer" class="dialog-footer">
          <el-button @click="timeModalVisible = false">取 消</el-button>
          <el-button type="primary" @click="timeModalVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </el-card>

    <el-card class="card" header="时钟服务器设置">
      <el-form :model="timeServerForm" label-width="100px">
        <el-form-item label="时钟同步">
          <el-radio-group v-model="timeServerForm.switchStatus">
            <el-radio :label="1">开启</el-radio>
            <el-radio :label="0">关闭</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="同步周期">
          <el-select :value="timeServerForm.period">
            <el-option v-for="item in periodOptions" :key="item.value" :value="item.value">{{ item.label }}</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时钟服务器">
          <el-input :value="timeServerForm.ntpserver" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">保存设置</el-button>
          <el-button>立即同步</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { formatTime, validateServerAddr } from '@/utils/util'

const periodOptions = [
  {
    value: '3600',
    label: '1小时'
  },
  {
    value: '7200',
    label: '2小时'
  },
  {
    value: '14400',
    label: '4小时'
  },
  {
    value: '28800',
    label: '8小时'
  },
  {
    value: '43200',
    label: '12小时'
  },
  {
    value: '86400',
    label: '1天'
  }
]
export default {
  data() {
    return {
      confirmLoading: false,
      isSyncing: false,
      timeForm: {
        localTime: '',
        sysTime: ''
      },
      newSysTime: '',
      localTimer: null,
      sysTimer: null,
      periodOptions: Object.freeze(periodOptions),
      timeModalVisible: false,
      timeServerForm: {
        switchStatus: 0,
        period: '',
        ntpserver: ''
      },
      timeServerRules: {
        ntpserver: [{ required: true, validator: validateServerAddr, trigger: 'blur' }]
      }
    }
  },
  created() {
    this.autoUpdateLocalTime()
    // this.autoUpdateSysTime()
    // this.getSysTime()
    // this.getNtpServerConf()
  },
  destroyed() {
    clearInterval(this.localTimer)
    // clearInterval(this.sysTimer)
  },
  methods: {
    validateServerAddr: validateServerAddr,
    // getNtpServerConf() {
    //   getNtpServerConf()
    //     .then(res => {
    //       const data = res.result
    //       data.minute = data.minute.split(',')
    //       this.timeServerForm.setFieldsValue(data)
    //     })
    // },
    // getSysTime() {
    //   getSysTime()
    //     .then(res => {
    //       // 加一秒弥补网络延迟
    //       const sysTime = new Date(res.result.systime).getTime() + 1000
    //       const timeZone = this.getTimezoneLabel(res.result.tz)
    //       this.sysTime = formatTime(sysTime)
    //       this.newTimeZone = timeZone
    //       this.timeZone = timeZone
    //     })
    // },
    // saveTimeServerConf() {
    //   this.timeServerForm.validateFields((err, values) => {
    //     if (!err) {
    //       this.confirmLoading = true
    //       // 去除空格
    //       values.ntpserver = values.ntpserver.replace(/\s/g, '')
    //       if (values.minute[0]) {
    //         values.minute = values.minute.join(',')
    //       } else {
    //         values.minute = '0'
    //       }
    //       console.log(values)
    //       setTimeserver(values)
    //         .then(res => {
    //           this.$message.success('保存成功！')
    //         })
    //         .finally(() => {
    //           this.confirmLoading = false
    //         })
    //     }
    //   })
    // },
    // syncByTimeServer() {
    //   this.timeServerForm.validateFields((err, values) => {
    //     if (!err) {
    //       this.isSyncing = true
    //       syncTime({ ntpserver: values.ntpserver })
    //         .then(res => {
    //           this.$message.success('时间同步成功！')
    //           this.getSysTime()
    //         })
    //         .finally(() => { this.isSyncing = false })
    //     }
    //   })
    // },
    // /**
    //  * 同步时间
    //  */
    // syncTime() {
    //   const utcOffset = new Date().getTimezoneOffset()
    //   const localTime = formatTime(this.moment.parseZone(this.localTime).utcOffset(utcOffset))

    //   setSysTime({ systime: localTime + ' UTC' })
    //     .then(res => {
    //       this.$message.success('时间同步成功！')
    //       const sysTime = new Date(res.result.systime).getTime() + 1000
    //       this.sysTime = formatTime(sysTime)
    //     })
    // },
    // /**
    //  * 修改系统时间
    //  */
    // changeSysTime() {
    //   this.confirmLoading = true
    //   setSysTime({ systime: formatTime(this.newSysTime) })
    //     .then(res => {
    //       this.timeModalVisible = false
    //       this.$message.success('系统时间修改成功！')
    //       const sysTime = new Date(res.result.systime).getTime() + 1000
    //       this.sysTime = formatTime(sysTime)
    //     })
    //     .finally(() => {
    //       this.confirmLoading = false
    //     })
    // },
    // handelSysTimeBtnClick() {
    //   this.sysTimeModalVisible = true
    // },
    /**
     * 自动更新页面显示本地时间
     */
    autoUpdateLocalTime() {
      const _this = this
      this.localTimer = setInterval(() => {
        _this.timeForm.localTime = formatTime(Date.now())
      }, 1000)
    },
    /**
     * 自动更新页面显示系统时间
     */
    autoUpdateSysTime() {
      const _this = this
      this.sysTimer = setInterval(function() {
        _this.timeForm.sysTime = formatTime(new Date(_this.sysTime).getTime() + 1000)
      }, 1000)
    }
  }
}
</script>

<style scoped>
.select-inline {
  width: 120px;
  margin-right: 15px;
}
</style>

