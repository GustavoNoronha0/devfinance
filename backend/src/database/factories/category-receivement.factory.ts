import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CategoryReceivement } from '../entities/category-receivement.entity';

define(CategoryReceivement, (faker: typeof Faker) => {
  const categoryReceivement = new CategoryReceivement();
  categoryReceivement.id = faker.random.uuid();
  categoryReceivement.title = faker.random.words();
  categoryReceivement.description = faker.random.words();
  return categoryReceivement;
});
