//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  onLoad: function () {
    
  },
  clickPhone: function(){
    wx.makePhoneCall({
      phoneNumber: '18787312252'
    })
  }
})
