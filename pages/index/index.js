// pages/buy/buy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    instruction: ["1.历史价格 仅供参考；", "2.随市场变化 时时波动；", "3.实际价格以门店，业务员报价为准；", "4.报价不包括油费，过路费，停车费等杂费；", "5.报价包括交强险，座位险，三者险，盗抢险，车损险，不计免赔；"]
  },
  goStore: function () {
    wx.showLoading({
      title: '稍后...',
    })
    wx.navigateBack({})
    wx.hideLoading();
  },
  takeIt: function () {
    wx.navigateTo({
      url: '../order/order?info=' + JSON.stringify(this.data.targetimg),
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      imgarr: JSON.parse(options.imgarr),
      target: options.target
    })
    var arr = this.data.imgarr;
    var curtarget = this.data.target;
    var len = this.data.imgarr.length;
    for (var i = 0; i < len; i++) {
      if (arr[i].index === curtarget) {
        this.setData({
          targetimg: arr[i]
        })
        break;
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})