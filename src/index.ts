import {Logger, ValidationPipe} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';
import * as util from 'util';

import { AppModule } from './app.module';

export async function run() {
  const logger = new Logger('system');

  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  app.use(json({ limit: '1mb' }));
  app.use(urlencoded({ extended: true, limit: '1mb' }));

  app.useGlobalPipes(new ValidationPipe({ forbidUnknownValues: true }));

  const port = 4000;
  const host = '0.0.0.0';

  await app.init();
  await app.listen(port, host);
  logger.log(`Listening http: ${host}:${port}`);

  process.on('unhandledRejection', (reason, p) => {
    logger.error('Fatal unhandled error', { reason, p: util.format(p) });
  });
}
