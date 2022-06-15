import { RequestListener } from 'http';

export interface ReqHandler {
  isApplicable: (path: string[], method?: string) => boolean;
  handle: RequestListener;
}
