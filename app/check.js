const Koa = require('koa2')
const wechat = require('./wechat-lib/middleware')
const config = require('./config')

const app = new Koa()

app.use(wechat(config.wechat))

app.listen(config.PORT) 