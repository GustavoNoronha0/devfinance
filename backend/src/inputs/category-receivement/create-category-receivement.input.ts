import { InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateCategoryReceivementInput {
  @IsNotEmpty()
  account: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
