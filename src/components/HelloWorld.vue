<template>
  <div class="hello">
    <h1 @click="scan">扫一扫</h1>
    <div @click="callCamera">调用摄像头</div>
    <div @click="getLocation">获取当前位置</div>
    <input type="number" pattern="[0-9]*" placeholder="请输入qq号" />
    <div>
      <span @click="machineType">获取当前的网络环境:</span>
      <span>{{ networkType }}</span>
    </div>
  </div>
</template>

<script>
import { chooseImage } from '../utils'

export default {
  name: 'HelloWorld',
  data() {
    return {
      networkType: ''
    }
  },
  methods: {
    scan() {
      /* eslint-disable */   
      if (window.wx) {
        wx.scanQRCode({
          needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
          scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
          success: function (res) {
            var result = res.resultStr // 当needResult 为 1 时，扫码返回的结果
            console.log(result)
          }
        })
      }
    },
    callCamera () {
      chooseImage(1, ['original', 'compressed'], ['album', 'camera'])
    },
    getLocation () {
      wx.getLocation({
          type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
          success: function (res) {
            // latitude 纬度 范围为90 ~ -90
            // longitude 经度 范围为180 ~ -180
            // spend 速度 以米/每秒计
            // accuracy 位置精度
            const { latitude, longitude, speed,  accuracy } = res

        }
      })
    },
    machineType () {
      let self = this
      wx.getNetworkType({
        success: function (res) {
          self.networkType = res.networkType // 返回网络类型2g，3g，4g，wifi
        }
      })
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
input{
  border: 1px solid red;
}
</style>
