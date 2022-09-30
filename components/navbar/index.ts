import type { IObject } from "typings/interface.d";

Component({
  options: { multipleSlots: true },
  properties: {
    title: {
      type: String,
      value: "导航栏",
    },
    backIcon: {
      type: String,
      value: "assets/icons/back.png",
    },
    showBackIcon: {
      type: Boolean,
      value: true,
    },
    borderBottom: {
      type: Boolean,
      value: true,
    },
    bottomShadow: {
      type: Boolean,
      value: false,
    },
    backText: {
      type: String,
      value: "返回",
    },
    slotHeight: {
      type: Number,
      value: 0,
    },
    showBackText: {
      type: Boolean,
      value: false,
    },
    titleColor: {
      type: String,
      value: "#030303",
    },
    backTextColor: {
      type: String,
      value: "#555",
    },
    backgroundColor: {
      type: String,
      value: "#fff",
    },
    backIconWidth: {
      type: String,
      value: "44rpx",
    },
    backIconHeight: {
      type: String,
      value: "44rpx",
    },
    customBackPath: {
      type: String,
      value: "",
    },
    customBackPathIsTabbar: {
      type: Boolean,
      value: true,
    },
    fixed: {
      type: Boolean,
      value: true,
    },
  },
  data: {
    navbarHeight: 0,
    navbarPaddingTop: 0,
    navbarPaddingBottom: 0,
    navbarPaddingLeft: 0,
    navbarPaddingRight: 0,
    menuWidth: 0,
    statusBarHeight: 0,
    navbarInnerTop: 0,
    collapseHeight: 0,
  },
  attached() {
    const systemInfo: IObject = wx.getSystemInfoSync();
    const menuButtonInfo: IObject = wx.getMenuButtonBoundingClientRect();
    this.setData({
      navbarHeight: menuButtonInfo.height,
      menuWidth: menuButtonInfo.width,
      navbarPaddingTop: menuButtonInfo.top,
      navbarPaddingBottom: menuButtonInfo.top - systemInfo.statusBarHeight,
      navbarPaddingLeft: systemInfo.screenWidth - menuButtonInfo.right,
      navbarPaddingRight: systemInfo.screenWidth - menuButtonInfo.right,
      statusBarHeight: systemInfo.statusBarHeight,
      navbarInnerTop: menuButtonInfo.height / 2,
    });
    this.getCollapseHeight();
  },
  methods: {
    goBack() {
      if (this.properties.customBackPath) {
        if (this.properties.customBackPathIsTabbar) {
          wx.switchTab({
            url: this.properties.customBackPath,
          });
        } else {
          wx.navigateTo({
            url: this.properties.customBackPath,
          });
        }
      } else {
        wx.navigateBack({
          delta: 1,
        });
      }
    },
    getCollapseHeight() {
      const _this = this;
      this.createSelectorQuery()
        .select("#slot")
        .boundingClientRect(function (res) {
          const height = res ? Number(res.height) : 0;
          _this.setData({
            collapseHeight:
              _this.data.navbarPaddingTop +
              _this.data.navbarHeight +
              _this.data.navbarPaddingBottom +
              height,
          });
          _this.triggerEvent("getCollapseHeight", _this.data.collapseHeight);
        })
        .exec();
    },
  },
});
