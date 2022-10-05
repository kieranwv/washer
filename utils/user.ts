import type { IObject, LoginResponse } from 'typings/interface.d';
import { StorageEnum } from '../config/enums';
import {
  getOpenId,
  saveUserProfile,
  getUserProfile,
  getPhone,
} from '../apis/costomer';

/**
 * 微信登录
 */
export const wxLogin = (): Promise<LoginResponse> => {
  return new Promise((resolve) => {
    wx.getUserProfile({
      desc: '获取您的基本信息',
      success: async ({ userInfo }) => {
        wx.login({
          success: async (res) => {
            const openId: string = await getOpenId(res.code);
            // const phone: string = await getPhone(res.code, openId);
            const phone = '';
            const costomerId: string = await saveUserProfile({
              ...userInfo,
              openid: openId,
              phone,
            });
            const profile: IObject = await getUserProfile(costomerId);
            wx.setStorageSync(StorageEnum.OPEN_ID, openId);
            wx.setStorageSync(StorageEnum.USER_PROFILE, profile);
            wx.setStorageSync(StorageEnum.COSTOMER_ID, costomerId);
            wx.setStorageSync(StorageEnum.IS_LOGIN, true);
            resolve({ status: 0, profile, costomerId } as LoginResponse);
          },
        });
      },
      fail: () => {
        wx.setStorageSync(StorageEnum.OPEN_ID, null);
        wx.setStorageSync(StorageEnum.USER_PROFILE, null);
        wx.setStorageSync(StorageEnum.COSTOMER_ID, null);
        wx.setStorageSync(StorageEnum.IS_LOGIN, false);
        resolve({
          status: 500,
          profile: null,
          costomerId: null,
        } as LoginResponse);
      },
    });
  });
};
