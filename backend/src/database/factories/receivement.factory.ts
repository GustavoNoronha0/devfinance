import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Receivement } from '../entities/receivement.entity';

define(Receivement, (faker: typeof Faker) => {
  const receivement = new Receivement();
  receivement.id = faker.random.uuid();
  receivement.title = faker.random.words();
  receivement.description = faker.random.words();
  receivement.value = faker.random.number();
  receivement.date = faker.date.future();
  return receivement;
});
