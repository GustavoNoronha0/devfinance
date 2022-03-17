import faker from 'faker';

export const Receivement = {
  id: faker.random.uuid(),
  title: faker.random.words(),
  description: faker.random.words(),
  value: faker.random.number(),
  date: faker.date.future(),
};
