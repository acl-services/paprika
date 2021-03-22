import { getStoryUrlPrefix } from "../../../../.storybook/storyTree";

describe("Takeover", () => {
  beforeEach(() => {
    cy.visitStorybook(`${getStoryUrlPrefix("Takeover")}--showcase`);
  });

  it("should close on ESC key press", () => {
    const anchor = cy.get("[data-pka-anchor='takeover']");
    anchor.should("be.visible");
    anchor.trigger("keydown", { key: "Escape" });
    anchor.should("not.exist");
  });
});
