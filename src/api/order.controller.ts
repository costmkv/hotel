import { Body, Controller, Get, Post, Query } from '@nestjs/common';

import { OrderService } from '../core/services/order';
import { CreateOrderDto } from './dto/CreateOrderDto';
import { FindOrdersDto } from './dto/FindOrdersDto';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('order')
  async create(@Body() params: CreateOrderDto) {
    return this.orderService.create(params);
  }

  @Get('orders')
  async find(@Query() query: FindOrdersDto) {
    return this.orderService.find(query);
  }
}
