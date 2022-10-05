import TencentMap from '../../libs/qqmap-wx-jssdk.min.js';
import Map from '../../config/map';
import type { IObject, LoginResponse } from 'typings/interface';
import { getLocation } from '../../utils/location';
import { StorageEnum } from '../../config/enums';
import { wxLogin } from '../../utils/user';
import { getUserProfile } from '../../apis/costomer';

Page({
  data: {
    // 是否登录
    isLogin: wx.getStorageSync(StorageEnum.IS_LOGIN),
    // 用户信息
    userProfile: wx.getStorageSync(StorageEnum.USER_PROFILE),
    // 用户 id
    costomerId: wx.getStorageSync(StorageEnum.COSTOMER_ID),
    // 地图实例
    mapCtx: wx.createMapContext('map'),
    // 是否选中地图上的点
    isSelected: false,
    // 是否定位过了
    locationed: false,
    // 中心经度
    longitude: 0,
    // 中心纬度
    latitude: 0,
    // 地图标记点
    markers: [
      {
        latitude: 36.14508,
        longitude: 120.43294,
        iconPath: '../../assets/icons/market.png',
        width: '140rpx',
        height: '140rpx',
        id: 1,
        name: '中海国际自助洗车一号机',
        address: '李沧区万年泉路8888号',
      },
    ],
    // 地图其他配置
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
      enableZoom: true,
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
    // 当前选择的洗车机
    currentSelect: 0,
  },
  async onLoad() {
    // 初始化定位
    this.setData({
      mapContext: new TencentMap({ key: Map.TENCENT_MAP_API_KEY }),
    });
    this.locationNow();
    // 获取用户信息
    const costomerId = wx.getStorageSync(StorageEnum.COSTOMER_ID);
    const res = await getUserProfile(costomerId);
    wx.setStorageSync(StorageEnum.USER_PROFILE, res);
    this.setData({
      userProfile: res as IObject,
      isLogin: wx.getStorageSync(StorageEnum.IS_LOGIN),
      costomerId: costomerId,
    });
  },
  onShow() {},

  // 定位中心点
  async locationNow() {
    if (!this.data.locationed) {
      const location: IObject = await getLocation();
      if (location) {
        wx.setStorageSync(StorageEnum.LOCATION_DATA, location);
        this.setData({
          longitude: location.longitude,
          latitude: location.latitude,
          locationed: true,
        });
      }
    }
  },

  markerTap(e: IObject) {
    for (let i = 0; i < this.data.markers.length; i++) {
      if (this.data.markers[i].id == e.markerId) {
        this.setData({
          currentSelect: i,
          isSelected: true,
        });
        break;
      }
    }
  },

  // 关闭弹窗
  closeAction() {
    this.setData({
      isSelected: false,
    });
  },

  // 跳转我的页面
  mine() {
    wx.navigateTo({
      url: '../../pages/mine/index',
    });
  },

  // 扫码洗车
  async scan() {
    if (!this.data.isLogin) {
      const res: LoginResponse = await wxLogin();
      if (res.status == 0) {
        this.setData({
          isLogin: true,
          userProfile: res.profile as IObject,
          costomerId: res.costomerId as string,
        });
        this.wxScan();
      }
    } else {
      this.wxScan();
    }
  },

  // 扫码主方法
  wxScan() {
    wx.scanCode({
      success(res) {
        console.log(res);
      },
    });
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
