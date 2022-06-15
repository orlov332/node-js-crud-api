import { ReqHandler } from './ReqHandler';
import userService from '../service/UserService';

export default {
  handle: async (req, res) => {
    const users = await userService.findAll();

    res.statusCode = 200;
    res.end(JSON.stringify(users));
  },

  isApplicable: ([api, entity, id], method) =>
    method === 'GET' &&
    api === 'api' &&
    entity === 'users' &&
    id === undefined,

} as ReqHandler;
