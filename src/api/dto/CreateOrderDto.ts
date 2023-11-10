import { IsDateString, IsEmail, IsEnum } from 'class-validator';

import { RoomType } from '../../RoomType';

export class CreateOrderDto {
  @IsEmail()
  userEmail: string;

  @IsEnum(RoomType)
  room: RoomType;

  @IsDateString()
  from: string;

  @IsDateString()
  to: string;
}
