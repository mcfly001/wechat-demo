<template>
  <div id="app"><router-view /></div>
</template>

<script>
import { initShare } from './utils'

export default {
  name: 'App',
  created() {
    let path = encodeURIComponent(location.href.split('#')[0])
    let shareInfo = {
      title: '那年|时光遗忘了，文字却清晰地复刻着',
      desc: '那年|时光遗忘了，文字却清晰地复刻着',
      link: 'http://wuliaoyuan.top/index.html',
      imgUrl: 'http://txt25-2.book118.com/2017/0425/book102185/102184432.jpg',
      success: function() {
        alert('用户确认分享后执行的回调函数')
      },
      cancel: function() {
        alert('用户取消分享后执行的回调函数')
      }
    }
    initShare(path, shareInfo)
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
