const Koa = require('koa2')
const wechat = require('./wechat-lib/middleware')
const config = require('./config')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const staticPath = '../../static/wechat-demo'
const app = new Koa()

app.use(bodyParser())
// 静态资源存放
app.use(static(
  path.join(__dirname, staticPath)
))
// 消息推送验证签名有效性
app.use(wechat(config.wechat))

app.listen(config.PORT)