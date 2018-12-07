import http from './http'

// 获取微信config信息
export const getConfig = path =>
  http('/getConfig', {
    path: path
  })

// 获取菜单配置
export const getMenuList = (url, options) => http(url, options)
