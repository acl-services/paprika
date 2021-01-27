import { getStoryUrlPrefix } from "../../../../.storybook/storyTree";

describe("TimePicker", () => {
  beforeEach(() => {
    cy.visitStorybook(`${getStoryUrlPrefix("TimePicker")}--basic`);
  });
  it("Should render", () => {
    cy.findByTestId("timePicker-Input").should("be.visible");
    cy.findByTestId("timePicker-Input").click();
    cy.findByText("Hours").should("be.visible");
    cy.findByText("Minutes").should("be.visible");
    cy.findByText("Period").should("be.visible");
    cy.findByText("1").should("be.visible");
    cy.findByText("2").should("be.visible");
    cy.findByText("3").should("be.visible");
    cy.findByText("4").should("be.visible");
    cy.findByText("5").should("be.visible");
    cy.findByText("6").should("be.visible");
    cy.findByText("7").should("be.visible");
    cy.findByText("8").should("be.visible");
    cy.findByText("9").should("be.visible");
    cy.findByText("10").should("be.visible");
    cy.findByText("11").should("be.visible");
    cy.findByText("12").should("be.visible");
    cy.findByText("00").should("be.visible");
    cy.findByText("15").should("be.visible");
    cy.findByText("30").should("be.visible");
    cy.findByText("45").should("be.visible");
    cy.findByText("Custom").should("be.visible");
    cy.findByText("am").should("be.visible");
    cy.findByText("pm").should("be.visible");
  });
  it("Should update highlighted time selection by typing", () => {
    cy.findByTestId("timePicker-Input").type("3:15pm");
    cy.findAllByRole("button")
      .contains("3")
      .should("have.css", "background-color")
      .should("eq", "rgb(204, 229, 253)");
    cy.findAllByRole("button")
      .contains("15")
      .should("have.css", "background-color")
      .should("eq", "rgb(204, 229, 253)");
    cy.findAllByRole("button")
      .contains("pm")
      .should("have.css", "background-color")
      .should("eq", "rgb(204, 229, 253)");

    cy.findByTestId("timePicker-Input").clear();
    cy.findByTestId("timePicker-Input").type("11:52am");
    cy.findAllByRole("button")
      .contains("11")
      .should("have.css", "background-color")
      .should("eq", "rgb(204, 229, 253)");
    cy.findAllByRole("button")
      .contains("Custom")
      .should("have.css", "background-color")
      .should("eq", "rgb(204, 229, 253)");
    cy.findAllByRole("button")
      .contains("am")
      .should("have.css", "background-color")
      .should("eq", "rgb(204, 229, 253)");
  });
  it("Should update highlighted time selection by selecting", () => {
    cy.findByTestId("timePicker-Input").click();
    cy.findAllByRole("button")
      .contains("3")
      .click();

    cy.findAllByRole("button")
      .contains("15")
      .click();

    cy.findAllByRole("button")
      .contains("pm")
      .click();

    cy.findByTestId("timePicker-Input").should("have.value", "3:15pm");
    cy.findAllByRole("button")
      .contains("3")
      .should("have.css", "background-color")
      .should("eq", "rgb(204, 229, 253)");
    cy.findAllByRole("button")
      .contains("15")
      .should("have.css", "background-color")
      .should("eq", "rgb(204, 229, 253)");
    cy.findAllByRole("button")
      .contains("pm")
      .should("have.css", "background-color")
      .should("eq", "rgb(204, 229, 253)");

    cy.findByTestId("timePicker-Input").clear();
    cy.findByTestId("timePicker-Input").click();
    cy.findAllByRole("button")
      .contains("11")
      .click();

    cy.findAllByRole("button")
      .contains("30")
      .click();

    cy.findAllByRole("button")
      .contains("am")
      .click();

    cy.findByTestId("timePicker-Input").should("have.value", "11:30am");
    cy.findAllByRole("button")
      .contains("11")
      .should("have.css", "background-color")
      .should("eq", "rgb(204, 229, 253)");
    cy.findAllByRole("button")
      .contains("30")
      .should("have.css", "background-color")
      .should("eq", "rgb(204, 229, 253)");
    cy.findAllByRole("button")
      .contains("am")
      .should("have.css", "background-color")
      .should("eq", "rgb(204, 229, 253)");
  });
  it("Should not open popover with isReadOnly", () => {
    cy.visitStorybook(`${getStoryUrlPrefix("TimePicker")}--read-only`);
    cy.findByTestId("timePicker-Input").focus();
    cy.findByTestId("popover.content").should("not.be.visible");
  });
});
