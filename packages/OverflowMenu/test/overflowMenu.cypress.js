import { getStoryUrlPrefix } from "../../../.storybook/storyTree";

describe("<OverflowMenu />", () => {
  beforeEach(() => {
    cy.visitStorybook(`${getStoryUrlPrefix("OverflowMenu")}-backyard-tests--cypress`);
  });

  it("should show hide overflow content when when clicking trigger", () => {
    cy.findByTestId("overflow-menu__trigger").click();
    cy.findByTestId("popover.content").should("be.visible");
    cy.wait(250).then(() => {
      cy.findByTestId("overflow-menu__trigger").click();
      cy.findByTestId("popover.content").should("not.be.visible");
    });
  });

  it("should retain trigger focus when the overflow is closed", () => {
    cy.findByTestId("overflow-menu__trigger").click();
    cy.wait(250).then(() => {
      cy.findByTestId("overflow-menu__trigger").click();
      cy.findByTestId("overflow-menu__trigger").then(triggerElement => {
        cy.focused().then(e => {
          expect(triggerElement.get(0) === e.get(0)).equal(true);
        });
      });
    });
  });
});
