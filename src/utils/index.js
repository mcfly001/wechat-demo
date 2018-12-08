/* eslint-disable */
import { getConfig } from '../api'

/**
 * 初始化分享
 * @param {} path 当前url
 * @param {} shareInfo 自定义分享的内容
 */
export const initShare = (path, shareInfo) => {
  getConfig(path).then(data => {
    const { timestamp, nonceStr, signature } = data
    /* eslint-disable */
    if (window.wx) {
      wx.config({
        debug: false,
        appId: 'wx9aa35e28128f3456',
        timestamp,
        nonceStr,
        signature,
        jsApiList: [
          'scanQRCode',
          'updateAppMessageShareData',
          'updateTimelineShareData',
          'checkJsApi',
          'hideMenuItems',
          'chooseImage'
        ]
      })

      wx.ready(function(){
        wx.updateTimelineShareData(shareInfo)
        wx.updateAppMessageShareData(shareInfo)
      })

      wx.error(function(res){
        console.log(res)
      })
    }
  })
}

/**
 * 拍照或从手机相册中选择图片
 * @param {*} count 
 * @param {*} sizeType 
 * @param {*} sourceType 
 * @param {*} success 
 */
export const chooseImage = (
  count = 1,
  sizeType = ['original', 'compressed'],
  sourceType = ['album', 'camera'],
  success) => {
  return wx.chooseImage({
    count: 1, // 默认9
    sizeType, // 可以指定是原图还是压缩图，默认二者都有
    sourceType, // 可以指定来源是相册还是相机，默认二者都有
    success
  })
}
