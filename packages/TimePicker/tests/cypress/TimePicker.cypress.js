import { getStoryUrlPrefix } from "../../../../.storybook/storyTree";

describe("TimePicker", () => {
  beforeEach(() => {
    cy.visitStorybook(`${getStoryUrlPrefix("TimePicker")}--basic`);
  });
  it("Should render", () => {
    cy.getByTestId("timePicker-Input").should("be.visible");
    cy.getByTestId("timePicker-Input").click();
    cy.getByText("Hours").should("be.visible");
    cy.getByText("Minutes").should("be.visible");
    cy.getByText("Period").should("be.visible");
    cy.getByText("1").should("be.visible");
    cy.getByText("2").should("be.visible");
    cy.getByText("3").should("be.visible");
    cy.getByText("4").should("be.visible");
    cy.getByText("5").should("be.visible");
    cy.getByText("6").should("be.visible");
    cy.getByText("7").should("be.visible");
    cy.getByText("8").should("be.visible");
    cy.getByText("9").should("be.visible");
    cy.getByText("10").should("be.visible");
    cy.getByText("11").should("be.visible");
    cy.getByText("12").should("be.visible");
    cy.getByText("00").should("be.visible");
    cy.getByText("15").should("be.visible");
    cy.getByText("30").should("be.visible");
    cy.getByText("45").should("be.visible");
    cy.getByText("Custom").should("be.visible");
    cy.getByText("am").should("be.visible");
    cy.getByText("pm").should("be.visible");
  });
  it("Should update highlighted time selection by typing", () => {
    cy.getByTestId("timePicker-Input").type("3:15pm");
    cy.getAllByRole("button")
      .contains("3")
      .should("have.css", "background-color")
      .should("eq", "rgb(204, 229, 253)");
    cy.getAllByRole("button")
      .contains("15")
      .should("have.css", "background-color")
      .should("eq", "rgb(204, 229, 253)");
    cy.getAllByRole("button")
      .contains("pm")
      .should("have.css", "background-color")
      .should("eq", "rgb(204, 229, 253)");

    cy.getByTestId("timePicker-Input").clear();
    cy.getByTestId("timePicker-Input").type("11:52am");
    cy.getAllByRole("button")
      .contains("11")
      .should("have.css", "background-color")
      .should("eq", "rgb(204, 229, 253)");
    cy.getAllByRole("button")
      .contains("Custom")
      .should("have.css", "background-color")
      .should("eq", "rgb(204, 229, 253)");
    cy.getAllByRole("button")
      .contains("am")
      .should("have.css", "background-color")
      .should("eq", "rgb(204, 229, 253)");
  });
  it("Should update highlighted time selection by selecting", () => {
    cy.getByTestId("timePicker-Input").click();
    cy.getAllByRole("button")
      .contains("3")
      .click();

    cy.getAllByRole("button")
      .contains("15")
      .click();

    cy.getAllByRole("button")
      .contains("pm")
      .click();

    cy.getByTestId("timePicker-Input").should("have.value", "3:15pm");
    cy.getAllByRole("button")
      .contains("3")
      .should("have.css", "background-color")
      .should("eq", "rgb(204, 229, 253)");
    cy.getAllByRole("button")
      .contains("15")
      .should("have.css", "background-color")
      .should("eq", "rgb(204, 229, 253)");
    cy.getAllByRole("button")
      .contains("pm")
      .should("have.css", "background-color")
      .should("eq", "rgb(204, 229, 253)");

    cy.getByTestId("timePicker-Input").clear();
    cy.getByTestId("timePicker-Input").click();
    cy.getAllByRole("button")
      .contains("11")
      .click();

    cy.getAllByRole("button")
      .contains("30")
      .click();

    cy.getAllByRole("button")
      .contains("am")
      .click();

    cy.getByTestId("timePicker-Input").should("have.value", "11:30am");
    cy.getAllByRole("button")
      .contains("11")
      .should("have.css", "background-color")
      .should("eq", "rgb(204, 229, 253)");
    cy.getAllByRole("button")
      .contains("30")
      .should("have.css", "background-color")
      .should("eq", "rgb(204, 229, 253)");
    cy.getAllByRole("button")
      .contains("am")
      .should("have.css", "background-color")
      .should("eq", "rgb(204, 229, 253)");
  });
  it("Should not open popover with isReadOnly", () => {
    cy.visitStorybook(`${getStoryUrlPrefix("TimePicker")}--read-only`);
    cy.getByTestId("timePicker-Input").focus();
    cy.getByTestId("popover.content").should("not.be.visible");
  });
});
