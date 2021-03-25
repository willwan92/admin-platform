import moment from 'moment'

// 系统日志级别
const LOG_LEVEL_OPTIONS = [
  {
    label: '紧急',
    value: 0,
    status: 'error'
  },
  {
    label: '警报',
    value: 1,
    status: 'error'
  },
  {
    label: '关键',
    value: 2,
    status: 'error'
  },
  {
    label: '错误',
    value: 3,
    status: 'error'
  },
  {
    label: '警告',
    value: 4,
    status: 'warning'
  },
  {
    label: '通知',
    value: 5,
    status: 'success'
  },
  {
    label: '信息',
    value: 6,
    status: 'default'
  },
  {
    label: '调试',
    value: 7,
    status: 'default'
  }
]

// 掩码选项
const MASKOPTIONS = [
  {
    label: '255.255.255.0',
    value: '255.255.255.0'
  },
  {
    label: '255.255.0.0',
    value: '255.255.0.0'
  },
  {
    label: '255.0.0.0',
    value: '255.0.0.0'
  },
  {
    label: '255.255.255.254',
    value: '255.255.255.254'
  },
  {
    label: '255.255.255.252',
    value: '255.255.255.252'
  },
  {
    label: '255.255.255.248',
    value: '255.255.255.248'
  },
  {
    label: '255.255.255.240',
    value: '255.255.255.240'
  },
  {
    label: '255.255.255.224',
    value: '255.255.255.224'
  },
  {
    label: '255.255.255.192',
    value: '255.255.255.192'
  },
  {
    label: '255.255.255.128',
    value: '255.255.255.128'
  },
  {
    label: '255.255.254.0',
    value: '255.255.254.0'
  },
  {
    label: '255.255.252.0',
    value: '255.255.252.0'
  },
  {
    label: '255.255.248.0',
    value: '255.255.248.0'
  },
  {
    label: '255.255.240.0',
    value: '255.255.240.0'
  },
  {
    label: '255.255.224.0',
    value: '255.255.224.0'
  },
  {
    label: '255.255.192.0',
    value: '255.255.192.0'
  },
  {
    label: '255.255.128.0',
    value: '255.255.128.0'
  },
  {
    label: '255.254.0.0',
    value: '255.254.0.0'
  },
  {
    label: '255.252.0.0',
    value: '255.252.0.0'
  },
  {
    label: '255.248.0.0',
    value: '255.248.0.0'
  },
  {
    label: '255.240.0.0',
    value: '255.240.0.0'
  },
  {
    label: '255.224.0.0',
    value: '255.224.0.0'
  },
  {
    label: '255.192.0.0',
    value: '255.192.0.0'
  },
  {
    label: '255.128.0.0',
    value: '255.128.0.0'
  },
  {
    label: '254.0.0.0',
    value: '254.0.0.0'
  },
  {
    label: '252.0.0.0',
    value: '252.0.0.0'
  },
  {
    label: '248.0.0.0',
    value: '248.0.0.0'
  },
  {
    label: '240.0.0.0',
    value: '240.0.0.0'
  },
  {
    label: '224.0.0.0',
    value: '224.0.0.0'
  },
  {
    label: '192.0.0.0',
    value: '192.0.0.0'
  },
  {
    label: '128.0.0.0',
    value: '128.0.0.0'
  }
]

// 日期选择范围快捷选项配置
const DATE_RANGES = {
  '今天': [moment().startOf('day'), moment().endOf('day')],
  '本月': [moment().startOf('month'), moment().endOf('day')],
  '上月': [moment().subtract(1, 'months').startOf('months'), moment().subtract(1, 'months').endOf('months')]
}

// 网口状态
const IF_STATUS = {
  'running': {
    statusText: '已连接',
    iconClass: 'icon-interface-using'
  },
  'no_cable': {
    statusText: '未连接',
    iconClass: 'icon-interface-up'
  },
  'down': {
    statusText: '已停用',
    iconClass: 'icon-interface-down'
  },
  'error': {
    statusText: '网口故障',
    iconClass: 'icon-error'
  }
}

// 名称正则表达式。规则：1-64位字母、数字、汉字、减号、下划线的组合
const NAME_REGEXP = /^[\w\u4e00-\u9fa5-]{1,64}$/

// 管理员账号正则表达式
// 规则：1-16位字母、数字和下划线的组合
const ACCOUNT_REGEXP = /^\w{1,16}$/

// 密码正则表达式
// 规则：8-16位字母、数字和特殊符号，至少三种字符的组合
const PWD_REGEXP = /^(?=.*[~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]])(?=.*[a-zA-Z])(?=.*\d)[~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]\w]{8,16}$/

// MAC地址
// 规则：用`:`分隔。例如：87:89:90:54:12:30
const MAC_REGEXP = /^([0-9a-fA-F]{2})(([:][0-9a-fA-F]{2}){5})$/

// 手机号正则表达式
const MOBILE_REGEXP = /^1[3-9]\d{9}$/

// 正整数表达式
const INT_REGEXP = /^[1-9]\d*$/

// IPv4 规则正则表达式
const IPV4_REGEXP = /^(25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}$/

// IP/Mask 规则正则表达式，Mask可选值：8、16、24和32
const IPMASK_REGEXP = /^(25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}(\/(8|16|24|32))?$/

// IPv6 规则正则表达式
const IPV6_REGEXP = /^((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?$/

// 域名正则表达式
// 域名规则：
// 1. 顶级域名由2-6位字母组成；
// 2. 其他级域名可由字母、数字和`-`组成，但是不能以`-`开头或结尾，长度范围1-63
// 3. 各级域名用`.`分隔
const DOMAIN_REGEXP = /^((?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,6}$/

// 邮箱正则表达式
// 邮箱规则：
// 1. 邮箱域名部分规则，同域名规则；
// 2. 邮箱前缀规则：可由字母、数字和`_`和`.`组成，但是只能以字母和数字开头，长度范围2-32
// 3. 邮箱前缀和邮箱域名用`@`分隔
const EMAIL_REGEXP = /^[A-Za-z0-9][\w.]{1,31}@((?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,6}$/

export {
  LOG_LEVEL_OPTIONS,
  IF_STATUS,
  DATE_RANGES,
  MAC_REGEXP,
  ACCOUNT_REGEXP,
  PWD_REGEXP,
  NAME_REGEXP,
  INT_REGEXP,
  EMAIL_REGEXP,
  DOMAIN_REGEXP,
  IPV4_REGEXP,
  IPV6_REGEXP,
  IPMASK_REGEXP,
  MOBILE_REGEXP,
  MASKOPTIONS
}
