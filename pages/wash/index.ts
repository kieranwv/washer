import type { IObject } from 'typings/interface';

Page({
  data: {
    timerTimeLabel: '00:00',
    washStatus: 0,
    navbarHeight: 0,
  },
  onLoad() {},
  onShow() {},

  // 开始洗车（计时）
  startWash() {
    this.setData({
      washStatus: 1,
    });
  },

  // 暂停（计时）
  stopWash() {
    this.setData({
      washStatus: 2,
    });
  },

  // 继续（计时）
  goWash() {
    this.setData({
      washStatus: 1,
    });
  },

  // 结束洗车（计时）
  overWash() {
    this.setData({
      washStatus: 3,
    });
  },

  // 获取导航栏高度
  getNavbarHeight(e: IObject) {
    this.setData({
      navbarHeight: e.detail,
    });
  },
});
