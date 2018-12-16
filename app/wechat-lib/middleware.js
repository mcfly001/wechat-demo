const sha1 = require('sha1')

module.exports = config => {
  // 加载认证的中间件 ctx是Koa的上下文  
  return async(ctx, next) => {
    const { nonce, timestamp, echostr, signature } = ctx.query
    const { token } = config.wechat
    const str = [token, timestamp, nonce].sort().join('')
    const sha = sha1(str)

    if(ctx.method === 'GET'){
      if(sha === signature){
        ctx.body = echostr
      }
      else{  
        ctx.body = 'Failed'
      }
    }
    else if(ctx.method === 'POST'){
      if(sha !== signature){
        return ctx.body = 'Failed'
      }
    }
  }
}
