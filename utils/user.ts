import type { IObject } from "typings/interface";
import { StorageEnum } from "../config/enums";
import { getOpenId, saveUserProfile } from "../apis/costomer";

/**
 * 微信登录
 */
export const wxLogin = () => {
  wx.login({
    success: async (res) => {
      const openId = await getOpenId(res.code);
      wx.setStorageSync(StorageEnum.OPEN_ID, openId);
      const costomerId = await saveUserProfile({ openid: openId });
      wx.setStorageSync(StorageEnum.COSTOMER_ID, costomerId);
      wx.setStorageSync(StorageEnum.IS_LOGIN, true);
    },
  });
};

/**
 * 用户相关方法封装
 */
export const login = () => {
  const resolveData: IObject = {};
  return new Promise((resolve) => {
    wx.getUserProfile({
      desc: "获取您的基本信息",
      success: async (res) => {
        const openId = wx.getStorageSync(StorageEnum.OPEN_ID);
        const costomerId = await saveUserProfile(
          Object.assign(
            {
              openId,
            },
            res.userInfo
          )
        );
        wx.setStorageSync(StorageEnum.USER_PROFILE, res.userInfo);
        wx.setStorageSync(StorageEnum.COSTOMER_ID, costomerId);
        wx.setStorageSync(StorageEnum.IS_LOGIN, true);
        resolve(resolveData);
      },
    });
  });
};
