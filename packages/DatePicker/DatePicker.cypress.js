import moment from "moment";

describe("<DatePicker />", () => {
  const today = moment();
  const targetDate = moment(today)
    .add(1, "month")
    .date(1);
  it("should display calendar after clicking input", () => {
    cy.visitStorybook("datepicker-cypress--datepicker-test");
    cy.get('[data-qa-anchor="datepicker-input"]').should("not.have.value");
    cy.get('[data-qa-anchor="datepicker-input"]').click();
    cy.get('[data-qa-anchor="datepicker-calendar"]').should("be.visible");
  });

  it("should show today's date in different styles", () => {
    cy.get(".CalendarDay__today").should("have.attr", "aria-label", today.format("dddd, MMMM D, YYYY"));
  });

  it("should change date after selected", () => {
    cy.get('[data-qa-anchor="datepicker-next-month"]').click();
    cy.get('[data-qa-anchor="datepicker-next-month"]').click();
    cy.get('[data-qa-anchor="datepicker-prev-month"]').click();
    cy.get(`[aria-label="${targetDate.format("dddd, MMMM D, YYYY")}"]`)
      .last()
      .click({ force: true });
    cy.get('[data-qa-anchor="datepicker-input"]').should("have.value", targetDate.format("MM/DD/YYYY"));
  });

  it("should clear data after delete all input", () => {
    cy.get('[data-qa-anchor="datepicker-input"]').clear();
    cy.get("body").click();
    cy.get('[data-qa-anchor="datepicker-input"]').should("not.have.value");
  });

  it("should set date after typing by keyboard", () => {
    cy.get('[data-qa-anchor="datepicker-input"]').type("1/2/2019");
    cy.get("body").click();
    cy.get('[data-qa-anchor="datepicker-input"]').should("have.value", "January 02, 2019");
  });

  it("should show error state if it cannot parse the typing string", () => {
    cy.get('[data-qa-anchor="datepicker-input"]').clear();
    cy.get('[data-qa-anchor="datepicker-input"]').type("abc");
    cy.get("body").click();
    cy.get('[data-qa-anchor="datepicker-input"]')
      .parent()
      .should("have.class", "form-input--has-error");
  });
});
