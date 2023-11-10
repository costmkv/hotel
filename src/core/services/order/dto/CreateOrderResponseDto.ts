import { IsDateString, IsEnum, IsUUID } from 'class-validator';

import { RoomType } from '../../../../RoomType';

export class CreateOrderResponseDto {
  @IsUUID()
  id: string;

  @IsUUID()
  userId: string;

  @IsEnum(RoomType)
  room: RoomType;

  @IsDateString()
  from: string;

  @IsDateString()
  to: string;
}
