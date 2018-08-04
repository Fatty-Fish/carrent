Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay: true,
    indicatorDots:true,
    circular:true,
    inputValue:""
  },
  searchInput: function (e) {
        var len = this.data.imgs.length;
        var arr = this.data.imgs;
        for (var i = 0; i < len; i++) {
          if (e.detail.value === arr[i].name) {
            wx.showLoading({
              title: '加载中...',
            })
            wx.navigateTo({
              url: "../bicycle/bicycle?imgarr="+ JSON.stringify(arr)
            })
            wx.hideLoading();
            break;
          }
        }    
  },
  touchevent: function (e) {
    wx.showLoading({
      title: '稍后...',
    })
    wx.navigateTo({
      url: `../index/index?target=${e.currentTarget.id}&imgarr=${JSON.stringify(this.data.imgs)}`,
    })
    wx.hideLoading();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: "https://www.easy-mock.com/mock/5a8bb58d956ed0635799cb66/carrent/",
      success:(res)=>{
        this.setData({
          imgs: res.data.data.value
        })
      }
    })
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