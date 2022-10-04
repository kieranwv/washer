import { GET, POST } from "../utils/request";
import { StorageEnum } from "../config/enums";
import type { IObject } from "typings/interface.d";

/**
 * 获取 open id
 */
export const getOpenId = async (
  _code: string
): Promise<void | string | null> => {
  const { code, data } = await GET("/costomer/getOpenId", { code: _code });
  if (code == 0) {
    return data;
  }
};

/**
 * 获取手机号
 */
export const getPhone = async (
  _code: string
): Promise<void | string | null> => {
  const openId = wx.getStorageSync(StorageEnum.OPEN_ID);
  const { code, data } = await GET("/costomer/getPhone", {
    code: _code,
    openId: openId,
  });
  if (code == 0) {
    return data;
  }
};

/**
 * 获取用户信息
 */
export const getUserProfile = async (
  _id: string
): Promise<void | string | null> => {
  const { code, data } = await GET("/costomer/getUserInfo", {
    id: _id,
  });
  if (code == 0) {
    return data;
  }
};

/**
 * 保存用户信息
 */
export const saveUserProfile = async (
  _data: IObject
): Promise<void | string | null> => {
  const { code, data } = await POST("/costomer/saveUserInfo", _data);
  if (code == 0) {
    return data;
  }
};
