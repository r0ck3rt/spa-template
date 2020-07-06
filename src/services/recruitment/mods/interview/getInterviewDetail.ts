/**
 * @description 获取面试详情
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['recruitment'];

export const init = new defs.recruitment.HrmInterviewDTO();

export async function fetch(params = {}) {
  const request = await initRequest();
  const result = await request.get(
    backEndUrl + '/interview/getInterviewerDetail',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      params,
    },
  );
  if (result) {
    if (!result.success) {
      throw new Error(JSON.stringify({ message: result.message }));
    } else {
      return result.data || new defs.recruitment.HrmInterviewDTO();
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
