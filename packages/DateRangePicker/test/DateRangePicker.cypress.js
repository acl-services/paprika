import moment from "moment";

describe("<DateRangePicker />", () => {
  beforeEach(() => {
    cy.visitStorybook("forms-daterangepicker-backyard-tests--cypress");
  });

  it("should display calendar and be able to select start", () => {
    const targetStartDate = moment();

    cy.getByTestId("daterangepicker.startinput").click();
    cy.getByTestId("daterangepicker.leftcalendar").should("be.visible");
    cy.getByTestId("daterangepicker.rightcalendar").should("be.visible");

    cy.getByTestId("daterangepicker.leftcalendar").within(() => {
      cy.getByTestId("calendar-next-month").click();
      cy.getByTestId("calendar-prev-month").click();
      const today = cy.get(`[aria-label="${targetStartDate.format("dddd, MMMM D, YYYY")}"]`).filter(":visible");

      today.click();
    });
    cy.getByTestId("daterangepicker.startinput").should("have.value", targetStartDate.format("MMMM DD, YYYY"));
    cy.getByTestId("daterangepicker.leftcalendar").should("not.be.visible");
    cy.getByTestId("daterangepicker.rightcalendar").should("not.be.visible");
  });
});
