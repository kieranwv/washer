Page({
  data: {
    walletNum: '256.00',
    currentNav: 0,
    list: [
      {
        num: 100.0,
        createTime: '2020.07.27  16:27:23',
      },
      {
        num: 100.0,
        createTime: '2020.07.17  12:25:20',
      },
      {
        num: 200.0,
        createTime: '2020.06.23  16:27:23',
      },
    ],
  },
  onLoad() {},
  onShow() {},
  onReachBottom() {},

  // 切换查询类型
  changeType() {
    this.setData({
      currentNav: this.data.currentNav == 0 ? 1 : 0,
    });
  },

  // 充值
  goPay() {
    wx.navigateTo({
      url: '/pages/pay/index',
    });
  },
});
