import faker from 'faker';
export const Todo = {
  id: faker.random.uuid(),
  name: faker.random.words(),
  email: faker.internet.email(),
  password: faker.internet.password(),
};
