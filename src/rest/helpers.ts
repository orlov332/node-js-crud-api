import { IncomingMessage } from 'http';

export async function getReqBody(req: IncomingMessage) {
  let body = '';
  for await (const chunk of req) {
    body += chunk;
  }
  return body;
}
