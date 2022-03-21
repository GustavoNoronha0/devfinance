import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class FindAllCategoryDebitsFilters {
  @Field({ nullable: true })
  account?: String;

  @Field({
    description: 'Filter greater then or equal by createdAt',
    nullable: true,
  })
  initialDate?: String;

  @Field({
    description: 'Filter less then or equal by createdAt',
    nullable: true,
  })
  finalDate?: String;

  @Field({ nullable: true })
  other?: string;
}