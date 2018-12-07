const ENUM = require('../enum')
const sha1 = require('sha1')
const jsSHA = require('jssha')

var raw = function (args) {
  var keys = Object.keys(args);
  keys = keys.sort()
  var newArgs = {};
  keys.forEach(function (key) {
    newArgs[key.toLowerCase()] = args[key];
  });

  var string = '';
  for (var k in newArgs) {
    string += '&' + k + '=' + newArgs[k];
  }
  string = string.substr(1);
  return string;
};

/**
 * 验证签名有效性
 * @param {*} nonce 
 * @param {*} timestamp 
 * @param {*} signature 
 */
const equalSignature = (nonce, timestamp, signature) => {
  const str = [ENUM.TOKEN, timestamp, nonce].sort().join('')
  const sha = sha1(str)
  return sha === signature
}

/**
 * 生成config里面的参数
 * @param {*} ticket 
 * @param {*} url
 */
const createSignature = (ticket, url) => {
  const nonceStr = Math.random().toString(36).substr(2, 15)
  const timestamp = parseInt(new Date().getTime() / 1000) + ''
  const ret = {
    jsapi_ticket: ticket,
    nonceStr,
    timestamp,
    url
  }
  let str = raw(ret)
  shaObj = new jsSHA(str, 'TEXT')
  ret.signature = shaObj.getHash('SHA-1', 'HEX')
  return ret
}

module.exports = {
  equalSignature,
  createSignature
}