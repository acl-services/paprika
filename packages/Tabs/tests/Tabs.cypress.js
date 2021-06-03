import { getStoryUrlPrefix } from "../../../.storybook/storyTree";

const baseStory = `${getStoryUrlPrefix("Tabs")}-backyard-tests`;
const testStory = "cypress";

const keySpace = { keyCode: 32 };
const keyEnter = { keyCode: 13 };
const keyRight = { keyCode: 39 };
const keyLeft = { keyCode: 37 };
const keyDown = { keyCode: 40 };
const keyUp = { keyCode: 38 };
const keyHome = { keyCode: 36 };
const keyEnd = { keyCode: 35 };

describe("Tabs component", () => {
  beforeEach(() => {
    cy.visitStorybook(`${baseStory}--${testStory}`);
  });

  it("can focus elements inside panel", () => {
    cy.findByText(/first tab/i)
      .tab()
      .focused()
      .contains(/focus test inside panel/i)
      .tab()
      .focused()
      .contains(/focus test outside tabs/i);
  });

  it("can be navigated with space, enter and arrow keys", () => {
    cy.findByText(/first tab/i)
      .trigger("keydown", keyRight)
      .focused()
      .contains(/disabled tab 2/i)
      .trigger("keydown", keyDown)
      .focused()
      .contains(/third tab/i)
      .trigger("keyup", keySpace);
    cy.findByText(/third panel/i).should("be.visible");

    cy.findByText(/third tab/i)
      .trigger("keydown", keyLeft)
      .focused()
      .contains(/disabled tab 2/i)
      .tab()
      .focused()
      .contains(/focus test outside tabs/i)
      .tab({ shift: true })
      .focused()
      .contains(/disabled tab 2/i)
      .trigger("keydown", keyUp)
      .focused()
      .contains(/first tab/i)
      .trigger("keyup", keyEnter);
    cy.findByText(/first panel/i).should("be.visible");
  });

  it("can be navigated with home and end keys", () => {
    cy.findByText(/third tab/i)
      .click()
      .trigger("keydown", keyHome)
      .focused()
      .contains(/first tab/i)
      .trigger("keydown", keyEnd)
      .focused()
      .contains(/disabled tab 6/i);
  });

  it("does not activate disabled tabs", () => {
    cy.findByText(/third tab/i).click();
    cy.findByText(/third panel/i).should("be.visible");

    cy.findByText(/disabled tab 2/i).click();
    cy.findByText(/third panel/i).should("be.visible");

    cy.findByText(/fifth tab/i)
      .click()
      .trigger("keydown", keyRight)
      .focused()
      .contains(/disabled tab 6/i)
      .trigger("keyup", keySpace);
    cy.findByText(/fifth panel/i).should("be.visible");
  });
});
