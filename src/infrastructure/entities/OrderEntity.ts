import { Injectable } from '@nestjs/common';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 } from 'uuid';

import { Order } from './Order';
import { RoomType } from '../../RoomType';

type Ctor = {
  userId: string;
  room: RoomType;
  from: string;
  to: string;
};

@Injectable()
export class OrderEntity {
  private orders: Order[] = [];

  async create(order: Ctor): Promise<Order> {
    const createdOrder = { id: v4(), ...order };
    this.orders.push(createdOrder);
    return createdOrder;
  }

  async find(params: { userId: string }): Promise<Order[]> {
    return this.orders.filter((order) => order.userId === params.userId);
  }
}
