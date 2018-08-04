// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startTime: "请先选择起始日期",
    endTime: "请先选择起始日期",
    rent: "请先选择起始日期",
    pageY: 0,
    flag: false,
    flagtrue: false
  },
  startdate: function () {
    var flag = this.data.flag;
    this.change();
    this.setData({
      flag: !flag,
      taptarget: "startdate"
    })
  },
  duedate: function () {
    if (this.data.taptarget) {
      this.setData({
        flag: true,
        flagtrue: false,
        taptarget: "duedate"
      })
    }
  },
  canceltap: function () {
    this.setData({
      flag: false
    })
  },
  goodtap: function () {
    this.setData({
      flag: false,
      flagtrue: true
    });
    if (this.data.taptarget === "startdate") {
      var date = this.data.year + "-" + this.data.month + "-" + this.data.day;
      this.setData({
        startTime: date,
        endTime: date,
        rent: this.data.dayrent
      })
    } else if (this.data.taptarget === "duedate") {
      var date = this.data.year + "-" + this.data.month + "-" + this.data.day;
      this.setData({
        endTime: date
      })
    }
  },
  yearchange: function (e) {
    this.setData({
      target: "year",
      pageY: e.changedTouches[0].pageY
    })
  },
  monthchange: function (e) {
    this.setData({
      target: "month",
      pageY: e.changedTouches[0].pageY
    })
  },
  daychange: function (e) {
    this.setData({
      target: "day",
      pageY: e.changedTouches[0].pageY
    })
  },
  change: function () {
    var foremonth,
        latermonth,
        hisday,
        laterday,
        lastday;
    if (this.data.month === 1) {
      foremonth = 12;
      latermonth = this.data.month + 1;
    }else if (this.data.month === 12) {
      foremonth = this.data.month - 1;
      latermonth = 1;
    }else {
      foremonth = this.data.month - 1;
      latermonth = this.data.month + 1;
    };
    var date = new Date();
    date.setFullYear(this.data.year, this.data.month, 0);
    lastday = date.getDate();
    if (this.data.day === 1) {
      hisday = lastday;
      laterday = this.data.day + 1;
    }else if (this.data.day === lastday) {
      hisday = this.data.day - 1;
      laterday = 1;
    }else {
      hisday = this.data.day - 1;
      laterday = this.data.day + 1;
      console.log(222)
    }
    this.setData({
      foreyear: this.data.year - 1,
      lateryear: this.data.year + 1,
      foremonth: foremonth,
      latermonth: latermonth,
      hisday: hisday,
      laterday: laterday
    })
  },
  changetime: function (e) {
    var olddate = new Date();
    if (this.data.target === "year") {
      var dis = e.changedTouches[0].pageY - this.data.pageY;
      if (dis >= 10) {
        olddate.setFullYear(this.data.year - 1, this.data.month - 1, this.data.day)
        this.setData({
          pageY: parseInt(e.changedTouches[0].pageY),
          date:olddate
        })
      } else if (dis <= -10) {
        olddate.setFullYear(this.data.year + 1, this.data.month - 1, this.data.day)
        this.setData({
          pageY: parseInt(e.changedTouches[0].pageY),
          date: olddate
        })
      }
    } else if (this.data.target === "month") {
      var dis = e.changedTouches[0].pageY - this.data.pageY;
      if (dis >= 10) {
        if (this.data.month === 1) {
          olddate.setFullYear(this.data.year, 11, this.data.day);
          this.setData({
            pageY: parseInt(e.changedTouches[0].pageY),
            date: olddate
          });
        } else {
          olddate.setFullYear(this.data.year, this.data.month - 2, this.data.day);
          this.setData({
            pageY: parseInt(e.changedTouches[0].pageY),
            date: olddate
          });
        }
      } else if (dis <= -10) {
        if (this.data.month === 12) {
          olddate.setFullYear(this.data.year, 0, this.data.day);
          this.setData({
            pageY: parseInt(e.changedTouches[0].pageY),
            date: olddate
          })
        }else {
          olddate.setFullYear(this.data.year, this.data.month + 1, 0);
          var lastday = olddate.getDate();
          if (this.data.day > lastday) {
            olddate.setFullYear(this.data.year, this.data.month, 1);
          }else {
            olddate.setFullYear(this.data.year, this.data.month, this.data.day);
          }
          this.setData({
            pageY: parseInt(e.changedTouches[0].pageY),
            date: olddate
          })
        }
      }
    } else if (this.data.target === "day") {
      var dis = e.changedTouches[0].pageY - this.data.pageY;
      olddate.setFullYear(this.data.year, this.data.month, 0);
      var lastday = olddate.getDate();
      if (dis >= 10) {
        if (this.data.day === 1) {
          olddate.setFullYear(this.data.year, this.data.month - 1, lastday);
          this.setData({
            pageY: parseInt(e.changedTouches[0].pageY),
            date: olddate
          })
        }else {
          olddate.setFullYear(this.data.year, this.data.month - 1, this.data.day - 1);
          this.setData({
            pageY: parseInt(e.changedTouches[0].pageY),
            date: olddate
          })
        }
      } else if (dis <= -10) {
        if (this.data.day === lastday) {
          olddate.setFullYear(this.data.year, this.data.month - 1, 1);
          this.setData({
            pageY: parseInt(e.changedTouches[0].pageY),
            date: olddate
          })
        }else {
          olddate.setFullYear(this.data.year, this.data.month - 1, this.data.day + 1);
          this.setData({
            pageY: parseInt(e.changedTouches[0].pageY),
            date: olddate
          })
        }
      }
    };
    this.setData({
      year: this.data.date.getFullYear(),
      month: this.data.date.getMonth() + 1,
      day: this.data.date.getDate()
    });
    this.change();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      date: new Date()
    });
    this.setData({
      dayrent:JSON.parse(options.info).rent,
      year: this.data.date.getFullYear(),
      month: this.data.date.getMonth() + 1,
      day: this.data.date.getDate()
    });
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