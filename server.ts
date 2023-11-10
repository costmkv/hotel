import * as process from 'process';
import { run } from './src';

run()
  .then(() => {
    console.log(`🕐 Server started at [${new Date()}]`);
  })
  .catch((err: Error) => {
    console.error(`Fatal error: ${err}; ${err.stack}`);
    process.exit(1);
  });
