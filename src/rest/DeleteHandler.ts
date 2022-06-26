import { ReqHandler } from './ReqHandler';
import userService from '../service/UserService';
import { getReqBody } from './helpers';

export default {
  handle: async (req, res) => {
    const id = req.url?.split('/')[3] || '';

    const user = await userService.delete(id);

    res.statusCode = 204;
    res.end(JSON.stringify(user));
  },

  isApplicable: ([api, entity, id], method) =>
    method === 'DELETE' &&
    api === 'api' &&
    entity === 'users' &&
    id,

} as ReqHandler;
