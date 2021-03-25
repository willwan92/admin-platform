import moment from 'moment'
import { range } from 'lodash'
import { IPV4_REGEXP, DOMAIN_REGEXP, INT_REGEXP } from '@/utils/constants'

export function timeFix () {
  const time = new Date()
  const hour = time.getHours()
  return hour < 9 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 20 ? '下午好' : '晚上好'
}

/**
 * 格式化网口速率
 * @param { number } num 网口速率值（bps）
 */
export function formatSpeed(num) {
  let res
  if (num < 1024) {
    res = num + 'bps'
  } else if (num < 1024 * 1024) {
    res = (num / 1024).toFixed(2) + 'Kbps'
  } else {
    res = (num / (1024 * 1024)).toFixed(2) + 'Mbps'
  }

  return res
}

/**
 * 生成时间范围选项
 */
export function createTimeRangeOptions() {
  const timeRangeOptions = [
    {
      value: '20',
      label: '最近20分钟'
    },
    {
      value: '60',
      label: '最近1小时'
    },
    {
      value: '180',
      label: '最近3小时'
    },
    {
      value: '480',
      label: '最近8小时'
    },
    {
      value: '1440',
      label: '最近24小时'
    }
  ]
  let date
  range(1, 8).forEach(i => {
    date = moment().subtract(i, 'days').format('YYYY/MM/DD')
    timeRangeOptions.push({
      label: date,
      value: date
    })
  })
  return timeRangeOptions
}

/**
 * 日期范围选择器禁用日期
 * @param { moment } current 当前日
 */
export function disabledDate(current) {
  // Can not select days before 6 month and after today
  return current < this.moment().subtract(6, 'month').endOf('day') || current > this.moment().endOf('day')
}

// IPv4 规则正则表达式
export const IPv4RegExp = /^(25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}$/

/**
 * 验证服务器地址是否合法
 */
export const validateServerAddr = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入服务器地址'))
  } else if (!DOMAIN_REGEXP.test(value) && !IPV4_REGEXP.test(value)) {
    callback(new Error('格式错误：请输入合法的IP或者域名'))
  } else {
    callback()
  }
}

/**
 * 下载文件
 */
export function download(data, filename) {
	if (!data) {
		return
  }
  const fileBlob = new Blob([data], { type: 'text/plain' })
  if (navigator.msSaveBlob) {
    // for IE
    navigator.msSaveBlob(fileBlob, filename)
  } else {
    const url = window.URL.createObjectURL(fileBlob)
    const link = document.createElement('a')
    link.style.display = 'none'
    link.href = url
    link.setAttribute('download', filename)
    document.body.appendChild(link)
    link.click()
    window.URL.revokeObjectURL(url)
    document.body.removeChild(link)
  }
}

/**
 * 下载文件
 */
export function downloadFileByUrl(url) {
	if (!url) {
		return
	}
	const link = document.createElement('a')
	link.style.display = 'none'
	link.href = process.env.VUE_APP_API_BASE_URL + url
	link.setAttribute('type', 'download')
	document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

/**
 * 验证数值是否在指定大小范围内
 * @param { Number } num 数值
 * @param { Number } min 最小值
 * @param { Number } max 最大值
 */
export function validateNumber(num, min, max) {
  if (typeof num !== 'string' && typeof num !== 'number') {
    return false
  }

  if (isNaN(num) || num < min || num > max) {
    return false
  } else {
    return true
  }
}

/**
 * 验证端口号是否合法
 */
export function validatePort(rule, value, callback) {
  if (!value) {
    callback()
  }

  if (!validateNumber(value, 1, 65535) || !INT_REGEXP.test(value)) {
    callback(new Error('错误：请输入1-65535之间的整数'))
  } else {
    callback()
  }
}

/**
 * 把时间格式化为时间字符串
 * @param {*} time 要格式化的时间
 * @param {String} format 时间字符串格式
 */
export function formatTime(time, format = 'YYYY-MM-DD HH:mm:ss') {
  return moment(time).format('YYYY-MM-DD HH:mm:ss')
}

/**
 * 触发 window.resize
 */
export function triggerWindowResizeEvent () {
  const event = document.createEvent('HTMLEvents')
  event.initEvent('resize', true, true)
  event.eventType = 'message'
  window.dispatchEvent(event)
}

export function handleScrollHeader (callback) {
  let timer = 0

  let beforeScrollTop = window.pageYOffset
  callback = callback || function () {}
  window.addEventListener(
    'scroll',
    event => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        let direction = 'up'
        const afterScrollTop = window.pageYOffset
        const delta = afterScrollTop - beforeScrollTop
        if (delta === 0) {
          return false
        }
        direction = delta > 0 ? 'down' : 'up'
        callback(direction)
        beforeScrollTop = afterScrollTop
      }, 50)
    },
    false
  )
}

export function isIE () {
  const bw = window.navigator.userAgent
  const compare = (s) => bw.indexOf(s) >= 0
  const ie11 = (() => 'ActiveXObject' in window)()
  return compare('MSIE') || ie11
}

/**
 * Remove loading animate
 * @param id parent element id or class
 * @param timeout
 */
export function removeLoadingAnimate (id = '', timeout = 1500) {
  if (id === '') {
    return
  }
  setTimeout(() => {
    document.body.removeChild(document.getElementById(id))
  }, timeout)
}
