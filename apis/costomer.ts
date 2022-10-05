import { GET, POST } from '../utils/request';
import type { IObject } from 'typings/interface.d';

/**
 * 获取 open id
 */
export const getOpenId = async (_code: string): Promise<string> => {
  const { code, data } = await GET('/costomer/getOpenId', { code: _code });
  if (code == 0) {
    return data;
  }
  return '';
};

/**
 * 获取手机号
 */
export const getPhone = async (
  _code: string,
  _openId: string
): Promise<string> => {
  const { code, data } = await GET('/costomer/getPhone', {
    code: _code,
    openId: _openId,
  });
  if (code == 0) {
    return data;
  }
  return '';
};

/**
 * 获取用户信息
 */
export const getUserProfile = async (_id: string): Promise<IObject> => {
  const { code, data } = await GET('/costomer/getUserInfo', {
    id: _id,
  });
  if (code == 0) {
    return data;
  }
  return {};
};

/**
 * 保存用户信息
 */
export const saveUserProfile = async (_data: IObject): Promise<string> => {
  const { code, data } = await POST('/costomer/saveUserInfo', _data);
  if (code == 0) {
    return data;
  }
  return '';
};

/**
 * 获取用户车牌号
 */
export const getUserPlate = async (_id: string): Promise<IObject> => {
  const { code, data } = await GET('/car/getList', {
    id: _id,
  });
  if (code == 0) {
    return data;
  }
  return {};
};