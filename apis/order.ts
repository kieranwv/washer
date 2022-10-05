import { GET, POST } from '../utils/request';
import type { IObject } from 'typings/interface.d';

/**
 * 创建订单
 */
export const createOrder = async (_data: IObject): Promise<string> => {
  const { code, data } = await POST('/order/create', _data);
  if (code == 0) {
    return data;
  }
  return '';
};

/**
 * 结束订单
 */
export const overOrder = async (_data: IObject): Promise<string> => {
  const { code, data } = await POST('/order/end', _data);
  if (code == 0) {
    return data;
  }
  return '';
};

/**
 * 订单详情
 */
export const getOrderInfo = async (_id: string): Promise<IObject> => {
  const { code, data } = await GET('/order/getInfoById', { id: _id });
  if (code == 0) {
    return data;
  }
  return {};
};

/**
 * 根据用户 ID 查询正在进行中的订单
 */
export const getOrdering = async (_costomerId: string): Promise<IObject> => {
  const { code, data } = await GET('/order/getOrderingByCostomerId', {
    costomerId: _costomerId,
  });
  if (code == 0) {
    return data;
  }
  return {};
};

/**
 * 查询用户订单分页列表
 */
export const getOrderList = async (
  _costomerId: string,
  _limit: number,
  _page: number
): Promise<IObject> => {
  const { code, data } = await GET('/order/page', {
    costomerId: _costomerId,
    limit: _limit,
    page: _page,
  });
  if (code == 0) {
    return data;
  }
  return {};
};
