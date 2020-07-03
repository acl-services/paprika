import moment from "moment";

describe("<DateRangePicker />", () => {
  const targetStartDate = moment();
  const targetEndDate = moment(targetStartDate)
    .add(1, "month")
    .date(1);

  beforeEach(() => {
    cy.visitStorybook("forms-daterangepicker-backyard-tests--cypress");
  });

  const selectStartDate = () => {
    cy.getByTestId("daterangepicker.startinput").click();
    cy.getByTestId("daterangepicker.leftcalendar").should("be.visible");
    cy.getByTestId("daterangepicker.rightcalendar").should("be.visible");
    cy.getByTestId("daterangepicker.leftcalendar").within(() => {
      cy.get(".CalendarDay__today").should("have.attr", "aria-label", targetStartDate.format("dddd, MMMM D, YYYY"));
      cy.getByTestId("calendar-next-month").click();
      cy.getByTestId("calendar-prev-month").click();

      cy.get(`[aria-label="${targetStartDate.format("dddd, MMMM D, YYYY")}"]`)
        .filter(":visible")
        .click({ force: true });
    });
  };

  it("should display calendars and be able to select start", () => {
    cy.getByTestId("daterangepicker.startinput").should("not.have.value");
    selectStartDate();
    cy.getByTestId("daterangepicker.startinput").should("have.value", targetStartDate.format("MMMM DD, YYYY"));
    cy.getByTestId("daterangepicker.leftcalendar").should("be.visible");
    cy.getByTestId("daterangepicker.rightcalendar").should("be.visible");
  });

  it("should hide calendars and set input value after selecting end date", () => {
    selectStartDate();

    cy.getByTestId("daterangepicker.endinput").should("not.have.value");

    cy.getByTestId("daterangepicker.rightcalendar").within(() => {
      cy.getByTestId("calendar-next-month").click();
      cy.getByTestId("calendar-prev-month").click();

      cy.get(`[aria-label="${targetEndDate.format("dddd, MMMM D, YYYY")}"]`)
        .filter(":visible")
        .click({ force: true });
    });

    cy.getByTestId("daterangepicker.endinput").should("have.value", targetEndDate.format("MMMM DD, YYYY"));
    cy.getByTestId("daterangepicker.leftcalendar").should("not.be.visible");
    cy.getByTestId("daterangepicker.rightcalendar").should("not.be.visible");
  });
});
