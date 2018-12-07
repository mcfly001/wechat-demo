/* eslint-disable */
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
  wx.chooseImage({
    count: 1, // 默认9
    sizeType, // 可以指定是原图还是压缩图，默认二者都有
    sourceType, // 可以指定来源是相册还是相机，默认二者都有
    success
  })
}