import type { IObject, LoginResponse } from 'typings/interface.d';
import { StorageEnum } from '../../config/enums';
import { wxLogin } from '../../utils/user';

Page({
  data: {
    // 是否登录
    isLogin: wx.getStorageSync(StorageEnum.IS_LOGIN),
    // 用户信息
    userProfile: wx.getStorageSync(StorageEnum.USER_PROFILE),
    // 用户 id
    costomerId: wx.getStorageSync(StorageEnum.COSTOMER_ID),
    // 钱包余额
    walletNum: 0,
  },
  async onShow() {
    this.setData({
      isLogin: wx.getStorageSync(StorageEnum.IS_LOGIN),
      userProfile: wx.getStorageSync(StorageEnum.USER_PROFILE),
      costomerId: wx.getStorageSync(StorageEnum.COSTOMER_ID),
    });
  },

  // 登录
  async login() {
    if (this.data.isLogin) return;
    const res: LoginResponse = await wxLogin();
    if (res.status == 0) {
      this.setData({
        isLogin: true,
        userProfile: res.profile as IObject,
        costomerId: res.costomerId as string,
      });
    }
  },

  // 跳转我的优惠卷
  goDiscount() {
    wx.navigateTo({
      url: '/pages/discount/index',
    });
  },
  // 跳转我的钱包
  goWallet() {
    wx.navigateTo({
      url: '/pages/wallet/index',
    });
  },

  // 跳转订单详情
  goOrderList() {
    wx.navigateTo({
      url: '/pages/order/index',
    });
  },

  // 跳转我的消息
  goMessage() {
    wx.navigateTo({
      url: '/pages/message/index',
    });
  },

  // 监听分享按钮触发
  onShareAppMessage() {
    return {
      path:
        '/pages/home/index?recommondId=' +
        wx.getStorageSync(StorageEnum.COSTOMER_ID),
      title: '自助洗车 - 邀请有礼',
    };
  },

  // 跳转操作手册
  goQuestion() {
    wx.navigateTo({
      url: '/pages/question/index',
    });
  },

  // 跳转客服
  goService() {
    wx.navigateTo({
      url: '/pages/service/index',
    });
  },
});
