import { Injectable, Logger } from '@nestjs/common';

import { OrderEntity, UserEntity } from '../../../infrastructure/entities';
import { CreateOrderDto } from './dto/CreateOrderDto';
import { CreateOrderResponseDto } from './dto/CreateOrderResponseDto';
import { FindOrdersDto } from './dto/FindOrdersDto';
import { FindOrdersResponseDto } from './dto/FindOrdersResponseDto';

@Injectable()
export class OrderService {
  private readonly logger = new Logger(OrderService.name);

  constructor(
    private readonly orderEntity: OrderEntity,
    private readonly userEntity: UserEntity
  ) {}

  async create(params: CreateOrderDto): Promise<CreateOrderResponseDto> {
    this.logger.log(`Create order ${JSON.stringify(params)}`);

    const { userEmail, ...orderParams } = params;

    let user = await this.userEntity.findByEmail(userEmail);

    if (!user) {
      user = await this.userEntity.create({ email: userEmail });
    }

    if (new Date(orderParams.from) > new Date(orderParams.to)) {
      throw new Error('Wrong from and to dates');
    }

    const order = await this.orderEntity.create({ ...orderParams, userId: user.id });

    this.logger.log(`Created order: ${JSON.stringify(order)}`);

    return order;
  }

  async find(params: FindOrdersDto): Promise<FindOrdersResponseDto> {
    this.logger.log(`Find orders ${JSON.stringify(params)}`);

    const user = await this.userEntity.findByEmail(params.userEmail);

    if (!user) {
      return { data: [] };
    }

    const orders = await this.orderEntity.find({ userId: user.id });

    return { data: orders };
  }
}
