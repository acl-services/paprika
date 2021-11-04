import faker from "faker";

const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    // eslint-disable-next-line no-nested-ternary
    status: statusChance > 0.66 ? "relationship" : statusChance > 0.33 ? "complicated" : "single",
    desc: faker.lorem.paragraph(),
    desc_more: faker.lorem.paragraph(),
    background: faker.lorem.sentences(),
  };
};

export default function makeData(...lens: number[]): Record<string, unknown>[] {
  const makeDataLevel: (depth?: number) => Record<string, unknown>[] = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
