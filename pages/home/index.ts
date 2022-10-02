import TencentMap from "../../libs/qqmap-wx-jssdk.min.js";
import Map from "../../config/map";

Page({
  data: {
    mapOptions: {
      // 倾斜角度，范围 0 ~ 40 , 关于 z 轴的倾角
      skew: 0,
      // 旋转角度，范围 0 ~ 360, 地图正北和设备 y 轴角度的夹角
      rotate: 0,
      // 显示带有方向的当前定位点
      showLocation: false,
      // 显示比例尺，工具暂不支持
      showScale: false,
      // 个性化地图使用的key
      subkey: Map.TENCENT_MAP_KEY,
      // 个性化地图配置的 style，不支持动态修改
      layerStyle: Map.TENCENT_MAP_STYLE_NUM,
      // 是否支持缩放
      enableZoom: false,
      // 是否支持拖动
      enableScroll: true,
      // 是否支持旋转
      enableRotate: false,
      // 显示指南针
      showCompass: false,
      // 展示3D楼块
      enable3D: false,
      // 开启俯视
      enableOverlooking: false,
      // 是否开启卫星图
      enableSatellite: false,
      // 是否开启实时路况
      enableTraffic: false,
    },
  },
  onLoad() {
    this.setData({
      mapContext: new TencentMap({ key: Map.TENCENT_MAP_API_KEY }),
    });
  },
  onShow() {},

  // go user center page
  mine() {
    wx.navigateTo({
      url: "../../pages/mine/index",
    });
  },

  // scan
  scan() {},
});
