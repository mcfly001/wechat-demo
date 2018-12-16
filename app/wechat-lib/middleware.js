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

      let callbackInfo // 返回的信息
      const data = await getRawBody(ctx.req, {
        length: ctx.length,
        limit: '1mb',
        encoding: ctx.charset
      })
      // content为一个对象，有一个属性为xml
      const content = await util.xmlToJson(data)
      const { ToUserName = '', FromUserName = '', CreateTime = parseInt(new Date().getTime() / 1000, 0), 
              MsgType = 'text', Content = '', MsgId = '' 
            } = content.xml
      switch(MsgType){
        case: 'text':
          callbackInfo = util.jsonToXml({
            ToUserName: FromUserName,
            FromUserName: ToUserName,
            CreateTime,
            MsgType,
            MsgId
          })
          break
        default:
          callbackInfo = 'success'
      }
      ctx.status = 200
      ctx.type = 'application/xml'

      ctx.body = callbackInfo
    }
  }
}

// `<xml> 
//                     <ToUserName>
//                       <![CDATA[${message.FromUserName}]]>
//                     </ToUserName> 
//                     <FromUserName>
//                       <![CDATA[${message.ToUserName}]]>
//                     </FromUserName> 
//                     <CreateTime>
//                       ${parseInt(new Date().getTime() / 1000, 0)}
//                     </CreateTime> 
//                     <MsgType>
//                       <![CDATA[${message.MsgType}]>
//                     </MsgType> 
//                     <Content>
//                       <![CDATA[${message.content}]]>
//                     </Content> 
//                   </xml>`