import faker from 'faker';

export const CategoryDebit = {
  id: faker.random.uuid(),
  title: faker.random.words(),
  description: faker.random.words(),
};
