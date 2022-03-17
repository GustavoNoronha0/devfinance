import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CategoryDebit } from '../entities/category-debit.entity';

define(CategoryDebit, (faker: typeof Faker) => {
  const categoryDebit = new CategoryDebit();
  categoryDebit.id = faker.random.uuid();
  categoryDebit.title = faker.random.words();
  categoryDebit.description = faker.random.words();
  return categoryDebit;
});
