import { checkA11yIssues } from "../../../helpers/jest-a11y/storybookPage";

describe("Spinner", () => {
  it("should be accessible", () => {
    const result = checkA11yIssues({
      kind: "Spinner/Automation Tests/Accessibility",
      story: "Default",
    });

    return result.then(component => {
      expect(component).toBeAccessible();
    });
  });
});
