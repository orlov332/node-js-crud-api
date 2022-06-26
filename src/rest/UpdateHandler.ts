import { ReqHandler } from './ReqHandler';
import userService from '../service/UserService';
import { getReqBody } from './helpers';

export default {
  handle: async (req, res) => {
    const id = req.url?.split('/')[3] || '';
    const body = await getReqBody(req);

    const user = await userService.update(id, JSON.parse(body));

    res.statusCode = 200;
    res.end(JSON.stringify(user));
  },

  isApplicable: ([api, entity, id], method) =>
    method === 'PUT' &&
    api === 'api' &&
    entity === 'users' &&
    id,

} as ReqHandler;
