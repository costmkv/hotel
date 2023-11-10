import { Module } from '@nestjs/common';

import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { OrderService } from './services/order';

@Module({
  imports: [InfrastructureModule],
  providers: [OrderService],
  exports: [OrderService],
})
export class CoreModule {}
