import { GET, POST } from '../utils/request';
import type { IObject } from 'typings/interface.d';

/**
 * 支付回调
 */
export const payHandle = async (_data: IObject): Promise<string> => {
  const { code, data } = await POST('/pay/payCallBack', _data);
  if (code == 0) {
    return data;
  }
  return '';
};

/**
 * 充值
 */
export const payWallet = async (_data: IObject): Promise<string> => {
  const { code, data } = await POST('/pay/recharge', _data);
  if (code == 0) {
    return data;
  }
  return '';
};

/**
 * 获取充值列表
 */
export const getWalletPayList = async (): Promise<IObject> => {
  const { code, data } = await GET('/costomerflow/page');
  if (code == 0) {
    return data;
  }
  return {};
};

/**
 * 查询用户流水
 */
export const getWalletHistory = async (
  _costomerId: string,
  _limit: number,
  _page: number
): Promise<IObject> => {
  const { code, data } = await GET('/costomerflow/page', {
    costomerId: _costomerId,
    limit: _limit,
    page: _page,
  });
  if (code == 0) {
    return data;
  }
  return {};
};
