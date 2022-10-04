import type { IObject } from 'typings/interface.d';

/**
 * 导出获取定位方法
 */
export const getLocation = (): Promise<IObject> => {
  return new Promise((resolve) => {
    wx.getSetting({
      success(settings: IObject) {
        if (settings.authSetting['scope.userLocation'] === true) {
          wx.getLocation({
            type: 'wgs84 ',
            success(location: IObject) {
              resolve(location);
            },
          });
        } else {
          wx.authorize({
            scope: 'scope.userLocation',
            success() {
              wx.getLocation({
                type: 'wgs84 ',
                success(location: IObject) {
                  resolve(location);
                },
                fail() {
                  wx.showToast({
                    title: '定位获取失败，请重试',
                    icon: 'none',
                  });
                },
              });
            },
            fail() {
              wx.showModal({
                title: '提示',
                content: '授权失败，点击确定跳转至授权页面',
                success(res) {
                  if (res.confirm) {
                    wx.openSetting({
                      success(res) {
                        if (res.authSetting['scope.userLocation']) {
                          getLocation();
                        }
                      },
                    });
                  }
                },
              });
            },
          });
        }
      },
    });
  });
};
