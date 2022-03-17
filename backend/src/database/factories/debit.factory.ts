import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Debit } from '../entities/debit.entity';

define(Debit, (faker: typeof Faker) => {
  const debit = new Debit();
  debit.id = faker.random.uuid();
  debit.title = faker.random.words();
  debit.description = faker.random.words();
  debit.value = faker.random.number();
  debit.date = faker.date.future();
  return debit;
});
