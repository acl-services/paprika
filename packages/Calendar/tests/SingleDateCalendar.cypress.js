import moment from "moment";
import { getStoryUrlPrefix } from "../../../.storybook/storyTree";

describe("<SingleDateCalendar />", () => {
  const today = moment();
  const targetDate = moment(today)
    .add(1, "month")
    .date(1);

  beforeEach(() => {
    cy.visitStorybook(`${getStoryUrlPrefix("Calendar")}-backyard-tests-cypress--singledatecalendar-test`);
  });

  const selectADateByClick = () => {
    cy.get(".CalendarDay__today").should("have.attr", "aria-label", today.format("dddd, MMMM D, YYYY"));

    cy.getByTestId("calendar-next-month").click();
    cy.getByTestId("calendar-next-month").click();
    cy.getByTestId("calendar-prev-month").click();
    cy.get(`[aria-label="${targetDate.format("dddd, MMMM D, YYYY")}"]`)
      .last()
      .click({ force: true });
  };

  const openShortcut = () => {
    cy.getByTestId("calendar.header")
      .contains(today.format("MMMM YYYY"))
      .click();
  };

  it("should be able to select date", () => {
    selectADateByClick();
  });

  it("should open shortcut panel and be able to jump to target month", () => {
    openShortcut();
    cy.getByTestId("calendar.shortcut").should("be.visible");

    cy.get('label[for="0"]').click();
    cy.get('label[for="2018"]').click();
    cy.getByTestId("calendar.apply").click();
    cy.getByTestId("calendar.header")
      .contains("January 2018")
      .should("be.visible");
  });
});
