import moment from "moment";

describe("<DatePicker />", () => {
  const today = moment();
  const targetDate = moment(today)
    .add(1, "month")
    .date(1);

  beforeEach(() => {
    cy.visitStorybook("datepicker-cypress--datepicker-test");
  });

  const selectADateByClick = () => {
    cy.getByTestId("datepicker.input").click();
    cy.getByTestId("datepicker.calendar").should("be.visible");

    cy.get(".CalendarDay__today").should("have.attr", "aria-label", today.format("dddd, MMMM D, YYYY"));

    cy.getByTestId("datepicker-next-month").click();
    cy.getByTestId("datepicker-next-month").click();
    cy.getByTestId("datepicker-prev-month").click();
    cy.get(`[aria-label="${targetDate.format("dddd, MMMM D, YYYY")}"]`)
      .last()
      .click({ force: true });
  };

  const openShortcut = () => {
    cy.getByTestId("datepicker.input").click();
    cy.getByTestId("datepicker.calendar.header")
      .contains(today.format("MMMM YYYY"))
      .click();
  };

  it("should display calendar and be able to select date", () => {
    cy.getByTestId("datepicker.input").should("not.have.value");
    selectADateByClick();
    cy.getByTestId("datepicker.input").should("have.value", targetDate.format("MMMM DD, YYYY"));
    cy.getByTestId("datepicker.calendar").should("not.be.visible");
  });

  it("should reset format after focus again", () => {
    selectADateByClick();
    cy.getByTestId("datepicker.input").click();
    cy.getByTestId("datepicker.input").should("have.value", targetDate.format("MM/DD/YYYY"));
  });

  it("should open shortcut panel and be able to jump to target month", () => {
    openShortcut();
    cy.getByTestId("datepicker.calendar.shortcut").should("be.visible");

    cy.get('label[for="0"]').click();
    cy.get('label[for="2018"]').click();
    cy.getByTestId("datepicker.calendar.apply").click();
    cy.getByTestId("datepicker.calendar.header")
      .contains("January 2018")
      .should("be.visible");
  });

  it("should clear data after delete all input", () => {
    selectADateByClick();
    cy.getByTestId("datepicker.input").clear();
    cy.get("body").click();
    cy.getByTestId("datepicker.input").should("not.have.value");
  });

  it("should set date on blur", () => {
    cy.clock();
    cy.getByTestId("datepicker.input").click();
    cy.tick(500);
    cy.getByTestId("datepicker.input").type("5/6/2001");

    cy.tick(5000);
    cy.getByTestId("datepicker.calendar.header")
      .contains("May 2001")
      .should("be.visible");

    cy.getByTestId("datepicker.input").click();
    cy.get("body").click();
    cy.tick(500);
    cy.getByTestId("datepicker.input").should("have.value", "May 06, 2001");
  });

  it("should show error state if it cannot parse the typing string", () => {
    cy.clock();
    cy.getByTestId("datepicker.input").click();

    cy.tick(500);
    cy.getByTestId("datepicker.input")
      .type("abc")
      .should("have.value", "abc");
    cy.get("body").click();

    cy.tick(5000);
    cy.getByTestId("datepicker.input")
      .parent()
      .should("have.class", "form-input--has-error");
  });
});
