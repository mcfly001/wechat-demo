const url = require('url')
const api = require('../api/index.js')
const utils = require('../utils')
const ENUM = require('../enum')

// 验证签名有效性
const checkSignature = function(req, res){
  const { query } = url.parse(req.url, true)
  const { nonce, timestamp, echostr, signature } = query
  const conditionsA = nonce && timestamp && echostr && signature
  const conditionsB = utils.equalSignature(nonce, timestamp, signature)
  
  if(conditionsA && conditionsB){
    res.end(echostr)
  }
  res.end('signature failt')
}

// 获取config里面的内容
const getConfig = function(req, res){
  const { query } = url.parse(req.url, true)
  const { path } = query
  api.getAccountToken().then(value => {
    let { access_token } = value
    api.getTicket(access_token).then(data => {
      const config = utils.createSignature(data.ticket, decodeURIComponent(path))
      res.json(config)
    }).catch(e => {
      res.json(e)
    })
  })
}

// 菜单 --- 创建
const menuCreate = function(req, res){
  const { access_token } = url.parse(req.url, true)
  let menuList = ENUM.menuList
  res.json(menuList)
}

const testDemo = function(req, res){
  res.end(1111111)
}

module.exports = {
  checkSignature,
  getConfig,
  menuCreate,
  testDemo
}