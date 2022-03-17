import faker from 'faker';

export const Debit = {
  id: faker.random.uuid(),
  title: faker.random.words(),
  description: faker.random.words(),
  value: faker.random.number(),
  date: faker.date.future(),
};
