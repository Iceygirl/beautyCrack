//app.js
App({

  //获取登录权限
  getUserInfo(callback) {
    const that = this
    wx.showLoading({
      title: '登录中',
    })
    wx.login({
      success: function () {
        wx.hideLoading()
        wx.getUserInfo({
          withCredentials: true,
          success: res => {
            typeof callback === 'function' && callback(res.userInfo)
          },
          fail: function() {
            wx.openSetting({
              success(res) {
                if (res.authSetting['scope.userInfo']) {
                  that.getUserInfo(callback)
                }
              }
            })
          }
        })
      }
    })
  },

})