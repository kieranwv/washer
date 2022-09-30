import aMap from "../../libs/amap-wx";
import Key from "../../config/key";

Page({
  data: {},
  onLoad() {
    this.setData({
      mapContext: new aMap.AMapWX({ key: Key.GAODE_MAP_KEY }),
    });
  },
  onShow() {},
  mine() {
    wx.navigateTo({
      url: "../../pages/mine/index",
    });
  },
});
