import moment from "moment";
import { getStoryUrlPrefix } from "../../../.storybook/storyTree";

describe("<DateRangePicker />", () => {
  const targetStartDate = moment();
  const targetEndDate = moment(targetStartDate)
    .add(1, "month")
    .date(1);

  beforeEach(() => {
    cy.visitStorybook(`${getStoryUrlPrefix("DateRangePicker")}-backyard-tests--cypress`);
  });

  const selectStartDate = () => {
    cy.findByTestId("daterangepicker.startinput").click();
    cy.findByTestId("daterangepicker.leftcalendar").should("be.visible");
    cy.findByTestId("daterangepicker.rightcalendar").should("be.visible");
    cy.findByTestId("daterangepicker.leftcalendar").within(() => {
      cy.get(".CalendarDay__today").should("have.attr", "aria-label", targetStartDate.format("dddd, MMMM D, YYYY"));
      cy.findByTestId("calendar-next-month").click();
      cy.findByTestId("calendar-prev-month").click();

      cy.get(`[aria-label="${targetStartDate.format("dddd, MMMM D, YYYY")}"]`)
        .filter(":visible")
        .click({ force: true });
    });
  };

  it("should display calendars and be able to select start", () => {
    cy.findByTestId("daterangepicker.startinput").should("not.have.value");
    selectStartDate();
    cy.findByTestId("daterangepicker.startinput").should("have.value", targetStartDate.format("MMMM DD, YYYY"));
    cy.findByTestId("daterangepicker.leftcalendar").should("be.visible");
    cy.findByTestId("daterangepicker.rightcalendar").should("be.visible");
  });

  it("should hide calendars and set input value after selecting end date", () => {
    selectStartDate();

    cy.findByTestId("daterangepicker.endinput").should("not.have.value");

    cy.findByTestId("daterangepicker.rightcalendar").within(() => {
      cy.findByTestId("calendar-next-month").click();
      cy.findByTestId("calendar-prev-month").click();

      cy.get(`[aria-label="${targetEndDate.format("dddd, MMMM D, YYYY")}"]`)
        .filter(":visible")
        .click({ force: true });
    });

    cy.findByTestId("daterangepicker.endinput").should("have.value", targetEndDate.format("MMMM DD, YYYY"));
    cy.findByTestId("daterangepicker.leftcalendar").should("not.exist");
    cy.findByTestId("daterangepicker.rightcalendar").should("not.exist");
  });
});
