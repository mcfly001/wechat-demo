webpackJsonp([1],{"/U2o":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),a=n("bOdI"),c=n.n(a),r=n("woOf"),i=n.n(r),u=n("//Fk"),s=n.n(u),p=n("mtWM"),l=n.n(p);l.a.interceptors.request.use(function(e){return e},function(e){return s.a.reject(e)}),l.a.interceptors.response.use(function(e){return e},function(e){return s.a.reject(e)}),l.a.defaults.baseURL="http://wuliaoyuan.top/";var d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"get",o=~["delete","get","head"].indexOf(n)?"params":"data";return t=i()({},t),l()(c()({url:e,method:n,timeout:6400},o,t)).then(function(e){return e.data}).catch(function(e){console.log(e)})},f=function(e,t){(function(e){return d("/getConfig",{path:e})})(e).then(function(e){var n=e.timestamp,o=e.nonceStr,a=e.signature;window.wx&&(wx.config({debug:!1,appId:"wx9aa35e28128f3456",timestamp:n,nonceStr:o,signature:a,jsApiList:["scanQRCode","updateAppMessageShareData","updateTimelineShareData","checkJsApi","hideMenuItems","chooseImage"]}),wx.ready(function(){wx.updateTimelineShareData(t),wx.updateAppMessageShareData(t)}),wx.error(function(e){console.log(e)}))})},m={name:"App",created:function(){var e=encodeURIComponent(location.href.split("#")[0]);f(e,{title:"那年|时光遗忘了，文字却清晰地复刻着",desc:"那年|时光遗忘了，文字却清晰地复刻着",link:"http://wuliaoyuan.top/index.html",imgUrl:"http://txt25-2.book118.com/2017/0425/book102185/102184432.jpg",success:function(){alert("用户确认分享后执行的回调函数")},cancel:function(){alert("用户取消分享后执行的回调函数")}})}},v={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var h=n("VU/8")(m,v,!1,function(e){n("t90w")},null,null).exports,w=n("/ocq"),g={name:"HelloWorld",data:function(){return{networkType:""}},methods:{scan:function(){window.wx&&wx.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:function(e){var t=e.resultStr;console.log(t)}})},callCamera:function(){!function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["original","compressed"],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["album","camera"],n=arguments[3];wx.chooseImage({count:1,sizeType:e,sourceType:t,success:n})}(1,["original","compressed"],["album","camera"])},getLocation:function(){wx.getLocation({type:"wgs84",success:function(e){e.latitude,e.longitude,e.speed,e.accuracy}})},machineType:function(){var e=this;wx.getNetworkType({success:function(t){e.networkType=t.networkType}})}}},y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",{on:{click:e.scan}},[e._v("扫一扫")]),e._v(" "),n("div",{on:{click:e.callCamera}},[e._v("调用摄像头")]),e._v(" "),n("div",{on:{click:e.getLocation}},[e._v("获取当前位置")]),e._v(" "),n("input",{attrs:{type:"number",pattern:"[0-9]*",placeholder:"请输入qq号"}}),e._v(" "),n("div",[n("span",{on:{click:e.machineType}},[e._v("获取当前的网络环境:")]),e._v(" "),n("span",[e._v(e._s(e.networkType))])])])},staticRenderFns:[]};var x=n("VU/8")(g,y,!1,function(e){n("/U2o")},"data-v-d07399e8",null).exports;o.a.use(w.a);var _=new w.a({routes:[{path:"/",name:"HelloWorld",component:x}]}),k=n("fO40"),T=n.n(k);n("TNmv");o.a.config.productionTip=!1,o.a.prototype.$weui=T.a,new o.a({el:"#app",router:_,components:{App:h},template:"<App/>"})},TNmv:function(e,t){},t90w:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.5f4f72a2a24f82dc1996.js.map