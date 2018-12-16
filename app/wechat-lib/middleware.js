const sha1 = require('sha1')
const getRawBody = require('raw-body')
const util = require('./util')

module.exports = config => {
  // 加载认证的中间件 ctx是Koa的上下文  
  return async(ctx, next) => {
    const { nonce, timestamp, echostr, signature } = ctx.query
    const { token } = config
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

      const data = await getRowBody(ctx.body, {
        length: ctx.length,
        limit: '1mb',
        encoding: ctx.charset
      })

      console.log('data', data)

      const content = await parseXml(data)
      console.log('content', content)
      const message = util.formatMessage(content.xml)
      console.log('message', message)
     
      ctx.status = 200
      ctx.type = 'application/xml'
      ctx.body = `<xml> 
                    <ToUserName>
                      <![CDATA[${message.FromUserName}]]>
                    </ToUserName> 
                    <FromUserName>
                      <![CDATA[${message.ToUserName}]]>
                    </FromUserName> 
                    <CreateTime>
                      ${parseInt(new Date().getTime() / 1000, 0) + ''}
                    </CreateTime> 
                    <MsgType>
                      <![CDATA[text]]>
                    </MsgType> 
                    <Content>
                      <![CDATA[${message.content}]]>
                    </Content> 
                  </xml>`
    }
  }
}
