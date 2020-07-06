/**
 * @description 获取人才池目录
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['recruitment'];

export const init = new defs.recruitment.TreeListDTO();

export async function fetch(params = {}) {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await initRequest();
      const result = await request.get(
        backEndUrl + '/personPool/getPersonPool',
        {
          headers: {
            'Content-Type': 'application/json',
          },
          params,
        },
      );
      if (result) {
        if (result.success) {
          resolve(result.data);
        } else {
          reject(new Error(JSON.stringify({ message: result.message })));
        }
      } else {
        reject(new Error(JSON.stringify({ message: '接口未响应' })));
      }
    } catch (error) {
      reject(error);
    }
  });
}
