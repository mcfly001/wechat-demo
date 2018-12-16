const Koa = require('koa')
const sha1 = require('sha1')
const PORT = 80
const config = {
  wechat: {
    appId: 'wx9aa35e28128f3456',
    appsecret: 'a25057dde0c84b4df3d5323896c5399b',
    token: 'weixin'
  }
}

const app = new Koa()

// 加载认证的中间件 ctx是Koa的上下文
app.use(async(cxt, next) => {
  const { nonce, timestamp, echostr, signature } = cxt.query
  const { token } = config.wechat
  const str = [token, timestamp, nonce].sort().join('')
  const sha = sha1(str)
  if(sha === signature){
    cxt.body = echostr
  }
  else{
    cxt.body = 'wrong'
  }
})

app.listen(PORT)