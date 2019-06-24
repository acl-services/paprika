import moment from "moment";

describe("<DatePicker />", () => {
  const today = moment();
  const targetDate = moment(today)
    .add(1, "month")
    .date(1);

  it("should display calendar after clicking input", () => {
    cy.visitStorybook("datepicker-cypress--datepicker-test");
    cy.getByTestId("datepicker.input").should("not.have.value");
    cy.getByTestId("datepicker.input").click();
    cy.getByTestId("datepicker.calendar").should("be.visible");
  });

  it("should show today's date in different styles", () => {
    cy.get(".CalendarDay__today").should("have.attr", "aria-label", today.format("dddd, MMMM D, YYYY"));
  });

  it("should change date after selected", () => {
    cy.getByTestId("datepicker-next-month").click();
    cy.getByTestId("datepicker-next-month").click();
    cy.getByTestId("datepicker-prev-month").click();
    cy.get(`[aria-label="${targetDate.format("dddd, MMMM D, YYYY")}"]`)
      .last()
      .click({ force: true });
    cy.getByTestId("datepicker.input").should("have.value", targetDate.format("MMMM DD, YYYY"));
  });

  it("should reset format after focus again", () => {
    cy.getByTestId("datepicker.input").click();
    cy.getByTestId("datepicker.input").should("have.value", targetDate.format("MM/DD/YYYY"));
  });

  it("should open shortcut panel when clicking on header", () => {
    cy.getByTestId("datepicker.calendar.header")
      .contains(targetDate.format("MMMM YYYY"))
      .click();
    cy.getByTestId("datepicker.calendar.shortcut").should("be.visible");
  });

  it("should jump to target month after apply shortcut", () => {
    cy.get('label[for="0"]').click();
    cy.get('label[for="2018"]').click();
    cy.getByTestId("datepicker.calendar.apply").click();
    cy.getByTestId("datepicker.calendar.header")
      .contains("January 2018")
      .should("be.visible");
  });

  it("should clear data after delete all input", () => {
    cy.getByTestId("datepicker.input").clear();
    cy.get("body").click();
    cy.getByTestId("datepicker.input").should("not.have.value");
  });

  it("should set date on blur", () => {
    cy.clock();
    cy.getByTestId("datepicker.input").type("5/6/2001");

    cy.tick(500);
    cy.getByTestId("datepicker.calendar.header")
      .contains("May 2001")
      .should("be.visible");

    cy.get("body").click();
    cy.tick(500);
    cy.getByTestId("datepicker.input").should("have.value", "May 06, 2001");
  });

  it("should show error state if it cannot parse the typing string", () => {
    cy.getByTestId("datepicker.input").clear();
    cy.getByTestId("datepicker.input").type("abc");
    cy.get("body").click();
    cy.getByTestId("datepicker.input")
      .parent()
      .should("have.class", "form-input--has-error");
  });
});
