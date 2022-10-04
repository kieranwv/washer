import type { IObject } from 'typings/interface';

Page({
  data: {
    selectIndex: 0,
    priceOps: [
      { price: 20, value: 20 },
      { price: 30, value: 30 },
      { price: 50, value: 50 },
      { price: 100, value: 100 },
      { price: 150, value: 150 },
      { price: 200, value: 200 },
    ],
  },
  onLoad() {},
  onShow() {},

  // 切换金额
  selectPrice(e: IObject) {
    this.setData({
      selectIndex: e.currentTarget.dataset.index,
    });
  },
});
