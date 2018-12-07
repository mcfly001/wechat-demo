const axios = require('axios')

// 添加请求拦截器
axios.interceptors.request.use((config) => {
  return config
}, err => {
  return Promise.reject(err)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

axios.defaults.baseURL = 'http://wuliaoyuan.top/'

const request = (url, options = {}, method = 'get') => {
  const key = ~['delete', 'get', 'head'].indexOf(method) ? 'params' : 'data'
  options = Object.assign({}, options)
  return axios({
    url: url,
    method: method,
    timeout: 6400,
    [key]: options
  })
    .then(res => {
      if(res.status === 200){
        return res.data
      }
      else {
        return Promise.reject('接口返回错误')
      }
    })
    .catch(e => {
      console.log(e)
    })
}

module.exports = request
