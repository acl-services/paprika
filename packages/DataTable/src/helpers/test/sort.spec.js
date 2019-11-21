import sort from "../sort";
import { sortDirections } from "../../constants";

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
    const expectedResult = [
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
      {
        id: 1,
        salary: 3000,
        name: "Abc",
      },
    ];

    expect(
      sort({
        data: originalData,
        columnId: "salary",
        direction: sortDirections.ASCEND,
      })
    ).toEqual(expectedResult);
  });

  it("sorts an array of items with number descend", () => {
    const expectedResult = [
      {
        id: 1,
        salary: 3000,
        name: "Abc",
      },
      {
        id: 3,
        salary: 2000,
        name: "Acb",
      },
      {
        id: 2,
        salary: 1000,
        name: "Cba",
      },
    ];

    expect(
      sort({
        data: originalData,
        columnId: "salary",
        direction: sortDirections.DESCEND,
      })
    ).toEqual(expectedResult);
  });

  it("sorts an array of items with string ascend", () => {
    const expectedResult = [
      {
        id: 1,
        salary: 3000,
        name: "Abc",
      },
      {
        id: 3,
        salary: 2000,
        name: "Acb",
      },
      {
        id: 2,
        salary: 1000,
        name: "Cba",
      },
    ];

    expect(
      sort({
        data: originalData,
        columnId: "name",
        direction: sortDirections.ASCEND,
      })
    ).toEqual(expectedResult);
  });

  it("sorts an array of items with string descend", () => {
    const expectedResult = [
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
      {
        id: 1,
        salary: 3000,
        name: "Abc",
      },
    ];

    expect(
      sort({
        data: originalData,
        columnId: "name",
        direction: sortDirections.DESCEND,
      })
    ).toEqual(expectedResult);
  });
});
