import { RequestListener } from 'http';

export interface ReqHandler {
  isApplicable: () => boolean;
  handle: RequestListener;
}
