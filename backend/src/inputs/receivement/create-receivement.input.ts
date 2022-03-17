import { InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateReceivementInput {
  @IsNotEmpty()
  account: string;

  @IsNotEmpty()
  categoryReceivement: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  value: number;

  @IsNotEmpty()
  date: Date;
}
