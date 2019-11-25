import sort from "../../src/helpers/sort";
import { sortDirections } from "../../src/constants";

const originalData = [
  {
    id: 1,
    salary: 3000,
    name: "Abc",
  },
  {
    id: 2,
    salary: 1000,
    name: "Cba",
  },
  {
    id: 3,
    salary: 2000,
    name: "Acb",
  },
];

describe("helpers/sort", () => {
  it("sorts an array of items with number ascend", () => {
    expect(
      sort({
        data: originalData,
        columnId: "salary",
        direction: sortDirections.ASCEND,
      })
    ).toMatchSnapshot();
  });

  it("sorts an array of items with number descend", () => {
    expect(
      sort({
        data: originalData,
        columnId: "salary",
        direction: sortDirections.DESCEND,
      })
    ).toMatchSnapshot();
  });

  it("sorts an array of items with string ascend", () => {
    expect(
      sort({
        data: originalData,
        columnId: "name",
        direction: sortDirections.ASCEND,
      })
    ).toMatchSnapshot();
  });

  it("sorts an array of items with string descend", () => {
    expect(
      sort({
        data: originalData,
        columnId: "name",
        direction: sortDirections.DESCEND,
      })
    ).toMatchSnapshot();
  });
});
