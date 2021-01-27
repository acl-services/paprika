import moment from "moment";
import { getStoryUrlPrefix } from "../../../.storybook/storyTree";

describe("<DateRangeCalendar />", () => {
  const today = moment();

  beforeEach(() => {
    cy.visitStorybook(`${getStoryUrlPrefix("Calendar")}-backyard-tests-cypress--daterangecalendar-test`);
  });

  it("should be initialized with current month", () => {
    cy.get(".CalendarDay__today").should("be.visible");
    cy.get(".CalendarDay__today").should("have.attr", "aria-label", today.format("dddd, MMMM D, YYYY"));
  });

  it("should allow to go to next/prev month", () => {
    cy.findByTestId("calendar-next-month").click();
    cy.findByTestId("calendar-next-month").click();
    cy.findByTestId("calendar-prev-month").click();

    const firstDayOfExpectedMonth = moment(today)
      .add(1, "month")
      .date(1);

    cy.get(`[aria-label="${firstDayOfExpectedMonth.format("dddd, MMMM D, YYYY")}"]`).should("be.visible");
  });

  it("should be able to select date range", () => {
    const startDate = moment(today).add(3, "day");
    const endDate = moment(today).add(1, "month");

    cy.get(`[aria-label="${startDate.format("dddd, MMMM D, YYYY")}"]`)
      .last()
      .click({ force: true });

    cy.findByTestId("calendar-next-month").click();

    cy.get(`[aria-label="${endDate.format("dddd, MMMM D, YYYY")}"]`)
      .last()
      .click({ force: true });
  });

  it("should open shortcut panel and be able to jump to target month", () => {
    cy.findAllByTestId("calendar.header")
      .contains(today.format("MMMM YYYY"))
      .click();
    cy.findByTestId("calendar.shortcut").should("be.visible");

    cy.get('label[for$="-0"]').click();
    cy.get('label[for$="-2018"]').click();
    cy.findByTestId("calendar.apply").click();
    cy.findAllByTestId("calendar.header")
      .contains("January 2018")
      .should("be.visible");
  });
});
