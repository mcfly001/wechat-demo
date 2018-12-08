#!/usr/bin/env node
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const PORT = 80
let app = express()
let router = require('./router')

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// 静态资源存放地方
app.use(express.static(path.join(__dirname, 'public')))

// 返回微信sdk config的内容
app.get('/getconfig', router.getConfig)

// 检验微信签名正确性
app.get('/check/signature', router.checkSignature)

// 自定义菜单
app.get('/menu/create', router.menuCreate)

app.listen(PORT, '0.0.0.0', function(){
  console.log('Server running at port:' + PORT)
})
