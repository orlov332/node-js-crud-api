import { ReqHandler } from './ReqHandler';
import userService from '../service/UserService';

export default {
  handle: async (req, res) => {
    const id = req.url?.split('/')[3] || '';
    const user = await userService.findById(id);

    res.statusCode = 200;
    res.end(JSON.stringify(user));
  },

  isApplicable: ([api, entity, id], method) =>
    method === 'GET' &&
    api === 'api' &&
    entity === 'users' &&
    id,

} as ReqHandler;
