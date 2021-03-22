import { getStoryUrlPrefix } from "../../../../.storybook/storyTree";

describe("Modal", () => {
  beforeEach(() => {
    cy.visitStorybook(`${getStoryUrlPrefix("Modal")}--showcase`);
  });

  it("should close on ESC key press", () => {
    const anchor = cy.get("[data-pka-anchor='modal.wrapper']");
    anchor.should("be.visible");
    cy.get("[data-pka-anchor='modal.header.close-button']").trigger("keydown", { key: "Escape" });
    anchor.should("not.exist");
  });
});
