import { GET } from '../utils/request';
import type { IObject } from 'typings/interface.d';

/**
 * 获取设备信息
 */
export const getDeviceInfo = async (_code: string): Promise<IObject> => {
  const { code, data } = await GET('/device/getInfoByCode', { code: _code });
  if (code == 0) {
    return data;
  }
  return {};
};
