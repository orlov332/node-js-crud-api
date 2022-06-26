import { ReqHandler } from './ReqHandler';
import userService from '../service/UserService';
import { getReqBody } from './helpers';

export default {
  handle: async (req, res) => {
    const body = await getReqBody(req);

    const user = await userService.create(JSON.parse(body));

    res.statusCode = 201;
    res.end(JSON.stringify(user));
  },

  isApplicable: ([api, entity, id], method) =>
    method === 'POST' &&
    api === 'api' &&
    entity === 'users' &&
    id === undefined,

} as ReqHandler;
