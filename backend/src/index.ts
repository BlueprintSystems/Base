import { runServer } from './platforms/node.ts';
import { app } from './routes.ts';

runServer({ app, port: 8081 });
