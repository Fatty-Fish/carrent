// pages/bicycle/bicycle.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: false,
    lock: "up"
  },
  chosen: function (e) {
    var arr = this.data.imgInfo;
    var len = arr.length;
    var target;
    for (var i = 0; i < len; i++) {
      if (arr[i].index === e.currentTarget.id) {
        wx.navigateTo({
          url: '../order/order?info=' + JSON.stringify(arr[i]),
        })
        break;
      }
    }
  },
  priceTap: function () {
    if (!this.data.flag) {
      this.setData({
        flag: true
      })
    } else {
      this.setData({
        flag: false
      })
    }
  },
  uptap: function () {
    this.setData({
      lock: "up"
    });
  },
  downtap: function () {
    this.setData({
      lock: "down"
    })
  },
  picktap: function () {
    this.setData({
      flag: false
    })
        if (this.data.lock === "up") {
          var resarr = this.data.imgInfo.sort(function (a, b) {
            var aa = parseInt(a.rent);
            var bb = parseInt(b.rent);
            return aa - bb;
          })
          this.setData({
            imgInfo: resarr
          })
        } else {
          var resarr = this.data.imgInfo.sort(function (a, b) {
            var aa = parseInt(a.rent);
            var bb = parseInt(b.rent);
            return bb - aa;
          })
          this.setData({
            imgInfo: resarr
          })
        }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.setData({
     imgInfo: JSON.parse(options.imgarr)
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