import cluster from 'cluster';
import os from 'os';
import process from 'process';
import startServer from './rest/server';


if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  os.cpus().forEach(() => cluster.fork());

  cluster.on('exit', (worker) => {
    if (worker.exitedAfterDisconnect) {
      console.log('Oh, it was just voluntary – no need to worry');
    }
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  startServer();
}
