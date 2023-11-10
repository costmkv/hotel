import { RoomType } from '../../RoomType';

export class Order {
  id: string;

  userId: string;

  room: RoomType;

  from: string;

  to: string;
}
