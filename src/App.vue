<template>
  <div id="app"><router-view /></div>
</template>

<script>
import { getConfig } from './api'

export default {
  name: 'App',
  created() {
    // let path = encodeURIComponent(location.href.split('#')[0])
    let path = encodeURIComponent('http://wuliaoyuan.top/index.html')
    getConfig(path).then(data => {
      const { timestamp, nonceStr, signature } = data
      /* eslint-disable */
      if (window.wx) {
        wx.config({
          debug: true,
          appId: 'wx9aa35e28128f3456',
          timestamp,
          nonceStr,
          signature,
          jsApiList: [
            'scanQRCode',
            'updateAppMessageShareData',
            'updateTimelineShareData',
            'checkJsApi',
            'hideMenuItems',
            'chooseImage'
          ]
        })

        wx.ready(function(){
          let sdata = {
            title: '那年|时光遗忘了，文字却清晰地复刻着',
            desc: '那年|时光遗忘了，文字却清晰地复刻着',
            link: 'http://wuliaoyuan.top/index.html',
            imgUrl: 'http://txt25-2.book118.com/2017/0425/book102185/102184432.jpg',
            success: function () {
                alert('用户确认分享后执行的回调函数')
            },
            cancel: function () {
                alert('用户取消分享后执行的回调函数')
            }
          }
          wx.updateTimelineShareData(sdata)
          wx.updateAppMessageShareData(sdata)
        })

        wx.error(function(res){
          console.log(res)
        })
      }
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
