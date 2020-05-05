import testers from "../hooks/useFilter/testers";
import Filter from "../components/Filter/Filter";

describe("action bar", () => {
  it.only("should just run", () => {
    expect(testers[Filter.rules.IS]("any value", "3")).toMatchSnapshot();
  });
});
