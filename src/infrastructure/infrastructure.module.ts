import { Module } from '@nestjs/common';

import { OrderEntity, UserEntity } from './entities';

@Module({
  providers: [OrderEntity, UserEntity],
  exports: [OrderEntity, UserEntity],
})
export class InfrastructureModule {}
