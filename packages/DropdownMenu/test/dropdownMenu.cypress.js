import { getStoryUrlPrefix } from "../../../.storybook/storyTree";

describe("<DropdownMenu />", () => {
  beforeEach(() => {
    cy.visitStorybook(`${getStoryUrlPrefix("DropdownMenu")}-backyard-tests--cypress`);
  });

  it("should show hide dropdown content when when clicking trigger", () => {
    cy.getByTestId("dropdown-menu__trigger").click();
    cy.getByTestId("popover.content").should("be.visible");
    cy.wait(250).then(() => {
      cy.getByTestId("dropdown-menu__trigger").click();
      cy.getByTestId("popover.content").should("not.be.visible");
    });
  });

  it("should retain trigger focus when the dropdown is closed", () => {
    cy.getByTestId("dropdown-menu__trigger").click();
    cy.wait(250).then(() => {
      cy.getByTestId("dropdown-menu__trigger").click();
      cy.getByTestId("dropdown-menu__trigger").then(triggerElement => {
        cy.focused().then(e => {
          expect(triggerElement.get(0) === e.get(0)).equal(true);
        });
      });
    });
  });
});
