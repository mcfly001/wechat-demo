const Koa = require('koa2')
const wechat = require('./wechat-lib/middleware')
const config = require('./config')
const app = new Koa()

// 消息推送验证签名有效性
app.use(wechat(config.wechat))

app.listen(config.PORT) 