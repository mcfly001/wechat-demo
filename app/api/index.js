const http = require('./http')

// 获取微信access_token
const getAccountToken = () => {
  return http(
    'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential',
    {
      appid: 'wx9aa35e28128f3456',
      secret: 'a25057dde0c84b4df3d5323896c5399b'
    }
  )
}

// 获取微信签名需要的ticket
const getTicket = (access_token) => {
  return http(
    'https://api.weixin.qq.com/cgi-bin/ticket/getticket',
    {
      access_token,
      type: 'jsapi'
    }
  )
}

module.exports = {
  getAccountToken,
  getTicket
}
