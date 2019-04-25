import { checkA11yIssues } from "../../../helpers/jest-a11y/storybookPage";

describe("Heading", () => {
  it("should be accessible", () => {
    const result = checkA11yIssues({
      kind: "Heading/Automation Tests/Accessibility",
      story: "Default",
    });

    return result.then(component => {
      expect(component).toBeAccessible();
    });
  });
});
