import { Module } from '@nestjs/common';

import { CoreModule } from '../core/core.module';
import { OrderController } from './order.controller';

@Module({
  imports: [CoreModule],
  controllers: [OrderController],
})
export class ApiModule {}
