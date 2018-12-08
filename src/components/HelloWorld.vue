<template>
  <div class="hello">
    <h1 @click="foo">{{ msg }}</h1>
    <div @click="callCamera">调用摄像头</div>
  </div>
</template>

<script>
import { chooseImage } from '../utils'

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: '浙江省杭州市'
    }
  },
  created() {
    // this.$weui.alert('test')
  },
  methods: {
    foo() {
      /* eslint-disable */   
      if (window.wx) {
        wx.scanQRCode({
          needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
          scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
          success: function (res) {
            var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
            console.log(result)
          }
        })
      }
    },
    callCamera () {
      chooseImage(1, ['original', 'compressed'], ['album', 'camera'])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
