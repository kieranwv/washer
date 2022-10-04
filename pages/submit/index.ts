Page({
  data: {
    // 价格
    price: 0,
    // 是否显示车牌号输入法
    isShowKeyboard: false,
    // 默认值
    plate: [],
    // 钱包余额
    walletNum: 0,
  },
  onLoad() {},
  onShow() {},

  // 打开车牌输入法
  openPlateKeyboard() {
    this.setData({
      isShowKeyboard: true,
    });
  },

  // 车牌输入法改变时
  plateChange(e: any) {
    this.setData({
      plate: e.detail,
    });
  },

  // 去充值
  goPay() {
    wx.navigateTo({
      url: '/pages/pay/index',
    });
  },
});
