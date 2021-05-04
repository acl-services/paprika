import moment from "moment";
import { getStoryUrlPrefix } from "../../../.storybook/storyTree";

describe("<DatePicker />", () => {
  const today = moment();
  const targetDate = moment(today)
    .add(1, "month")
    .date(1);

  const selectADateByClick = () => {
    cy.findByTestId("datepicker.input").click();
    cy.findByTestId("datepicker.calendar").should("be.visible");

    cy.get(".CalendarDay__today").should("have.attr", "aria-label", today.format("dddd, MMMM D, YYYY"));

    cy.findByTestId("calendar-next-month").click();
    cy.findByTestId("calendar-next-month").click();
    cy.findByTestId("calendar-prev-month").click();
    cy.get(`[aria-label="${targetDate.format("dddd, MMMM D, YYYY")}"]`)
      .last()
      .click({ force: true });
  };

  const openShortcut = () => {
    cy.findByTestId("datepicker.input").click();
    cy.findAllByTestId("calendar.header")
      .contains(today.format("MMMM YYYY"))
      .click();
  };

  it("should display calendar and be able to select date", () => {
    cy.visitStorybook(`${getStoryUrlPrefix("DatePicker")}-backyard-tests--cypress`);
    cy.findByTestId("datepicker.input").should("not.have.value");
    selectADateByClick();
    cy.findByTestId("datepicker.input").should("have.value", targetDate.format("MMMM DD, YYYY"));
    cy.findByTestId("datepicker.calendar").should("not.be.visible");
  });

  it("should reset format after focus again", () => {
    cy.visitStorybook(`${getStoryUrlPrefix("DatePicker")}-backyard-tests--cypress`);
    selectADateByClick();
    cy.findByTestId("datepicker.input").click();
    cy.findByTestId("datepicker.input").should("have.value", targetDate.format("MM/DD/YYYY"));
  });

  it("should open shortcut panel and be able to jump to target month", () => {
    cy.visitStorybook(`${getStoryUrlPrefix("DatePicker")}-backyard-tests--cypress`);
    openShortcut();
    cy.findByTestId("calendar.shortcut").should("be.visible");

    cy.get('label[for$="-0"]').click();
    cy.get('label[for$="-2018"]').click();
    cy.findByTestId("calendar.apply").click();
    cy.findAllByTestId("calendar.header")
      .contains("January 2018")
      .should("be.visible");
  });

  it("should clear data after delete all input", () => {
    cy.visitStorybook(`${getStoryUrlPrefix("DatePicker")}-backyard-tests--cypress`);
    selectADateByClick();
    cy.findByTestId("datepicker.input").clear();
    cy.get("body").click();
    cy.findByTestId("datepicker.input").should("not.have.value");
  });

  it("should set date on blur", () => {
    cy.clock();
    cy.visitStorybook(`${getStoryUrlPrefix("DatePicker")}-backyard-tests--cypress`);
    cy.findByTestId("datepicker.input").click();
    cy.tick(500);
    cy.findByTestId("datepicker.input").type("5/6/2001");

    cy.tick(5000);
    cy.findAllByTestId("calendar.header")
      .contains("May 2001")
      .should("be.visible");

    cy.findByTestId("datepicker.input").click();
    cy.get("body").click();
    cy.tick(500);
    cy.findByTestId("datepicker.input").should("have.value", "May 06, 2001");
  });

  it("should show error state if it cannot parse the typing string", () => {
    cy.clock();
    cy.visitStorybook(`${getStoryUrlPrefix("DatePicker")}-backyard-tests--cypress`);
    cy.findByTestId("datepicker.input").type("abc{enter}");

    cy.tick(5000);
    cy.findByTestId("datepicker.input").should("have.attr", "aria-invalid", "true");
  });

  it("should handle time change", () => {
    cy.clock();
    cy.visitStorybook(`${getStoryUrlPrefix("DatePicker")}-backyard-tests--cypress-date-picker-with-time`);
    cy.findByTestId("datepicker.input").type("2020-07-17 11:00:00");

    cy.get("body").click();
    cy.tick(500);
    cy.findByTestId("datepicker.input").should("have.value", "2020-07-17 11:00:00 am");
  });
});
