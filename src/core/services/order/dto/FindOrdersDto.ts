import { IsEmail } from 'class-validator';

export class FindOrdersDto {
  @IsEmail()
  userEmail: string;
}
