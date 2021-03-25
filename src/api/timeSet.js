import axios from '@/utils/request'

/**
 * 获取时钟服务器配置
 */
function getNtpServerConf () {
  return axios({
    url: '/sysset/timeserver/',
    method: 'get'
  })
}

/**
 * 设置时钟服务器
 */
function setTimeserver (data) {
  return axios({
    url: '/sysset/timeserver/',
    method: 'post',
    data: data
  })
}

/**
 * 同步时钟服务器时间
 */
function syncTime (data) {
  return axios({
    url: '/sysset/timesync/',
    method: 'post',
    data
  })
}

export {
  getNtpServerConf,
  setTimeserver,
  syncTime
}
