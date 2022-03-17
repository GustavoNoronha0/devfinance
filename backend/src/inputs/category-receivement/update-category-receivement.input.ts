import { InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateCategoryReceivementInput {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
