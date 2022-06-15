import http from 'http';
import { ReqHandler } from './ReqHandler';
import NotFoundError from '../error/NotFoundError';
import InvalidDataError from '../error/InvalidDataError';
import createHandler from './CreateHandler';
import 'dotenv/config';

const PORT = process.env.HTTP_SERVER_PORT || 4000;

const handlers: ReqHandler[] = [
  createHandler,
];

const server = http.createServer(async (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json');

    const path = req.url?.split('/').slice(1) || [];
    const handler = handlers.find((h) => h.isApplicable(path, req.method));
    if (handler) {
      await handler.handle(req, res);
    } else {
      throw new NotFoundError(`Unknown endpoint requested: ${req.url}`);
    }
  } catch (error) {
    let message;
    if (error instanceof NotFoundError) {
      res.statusCode = 404;
      message = error.message;
    } else if (error instanceof InvalidDataError) {
      res.statusCode = 400;
      message = error.message;
    } else {
      res.statusCode = 500;
      message = `Unexpected server error: ${error}`;
    }
    res.end(JSON.stringify({ message }));
  }
});

server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
