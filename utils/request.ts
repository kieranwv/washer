import { REQUEST_URL, TENCENT_MAP_URL } from '../config/url';
import { BaseEnum } from '../config/enums';
import type { IObject, ResponseData } from '../typings/interface.d';

/**
 * 导出 get 请求
 */
export const GET = <T>(
  _url: string,
  _data: IObject
): Promise<ResponseData<T> | undefined | any> => {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: REQUEST_URL + _url,
      data: { ..._data, wxAppId: BaseEnum.APP_ID },
      header: {
        'content-type': 'application/json',
      },
      method: 'GET',
      success({ statusCode, data }) {
        const reponseData: ResponseData<T> = (data as unknown) as ResponseData;
        if (statusCode == 200 && reponseData.code == 0) {
          resolve(reponseData);
        } else {
          wx.showToast({
            title: reponseData.msg || '数据请求失败',
            icon: 'error',
          });
          reject(reponseData);
        }
      },
    });
  });
};

/**
 * 导出 post 请求
 */
export const POST = <T>(
  _url: string,
  _data: IObject
): Promise<ResponseData<T> | undefined | any> => {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: REQUEST_URL + _url,
      data: { ..._data, wxAppId: BaseEnum.APP_ID },
      header: {
        'content-type': 'application/json',
      },
      method: 'POST',
      success({ statusCode, data }) {
        const reponseData: ResponseData<T> = (data as unknown) as ResponseData;
        if (statusCode == 200 && reponseData.code == 0) {
          resolve(reponseData);
        } else {
          wx.showToast({
            title: reponseData.msg || '数据请求失败',
            icon: 'error',
          });
          reject(reponseData);
        }
      },
    });
  });
};

/**
 * 导出文件上传请求
 */
export const UPLOAD = <T>(
  ops: IObject
): Promise<ResponseData<T> | undefined | any> => {
  return new Promise(function (resolve, reject) {
    wx.uploadFile({
      url: REQUEST_URL + ops.url,
      filePath: ops.filesPath,
      name: 'file',
      formData: {
        ...ops.data,
        wxAppId: BaseEnum.APP_ID,
      },
      success({ statusCode, data }) {
        const reponseData: ResponseData<T> = (data as unknown) as ResponseData;
        if (statusCode == 200) {
          resolve(reponseData);
        }
      },
      fail(err) {
        reject(err);
      },
    });
  });
};

/**
 * 导出腾讯地图 get 请求
 */
export const TENCENT_MAP_GET = <T>(
  _url: string,
  _data: IObject
): Promise<ResponseData<T> | undefined | any> => {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: TENCENT_MAP_URL + _url,
      data: { ..._data, wxAppId: BaseEnum.APP_ID },
      header: {
        'content-type': 'application/json',
      },
      method: 'GET',
      success({ statusCode, data }) {
        const reponseData: ResponseData<T> = (data as unknown) as ResponseData;
        if (statusCode == 200) {
          resolve(reponseData);
        } else {
          wx.showToast({
            title: reponseData.msg || '数据请求失败',
            icon: 'error',
          });
          reject(reponseData);
        }
      },
    });
  });
};
