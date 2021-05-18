import { getStoryUrlPrefix } from "../../../../.storybook/storyTree";
import selectors from "../helpers/selectors";
import { toggleDropdown } from "../helpers/toggleHelpers";

const storyPrefix = `${getStoryUrlPrefix("ListBox")}`;
const typingDelay = { delay: 250 };

describe("ListBox single select", () => {
  beforeEach(() => {
    cy.visitStorybook(`${storyPrefix}-backyard-tests--single-list-box-story`);
    toggleDropdown();
  });

  it("should toggle the list-box popover while triggering enter on the keyboard", () => {
    const anchor = cy.get("[data-pka-anchor='list-box-trigger']");
    anchor.should("be.visible");
    const joker = /The Joker/i;
    const darth = /Darth Vader/i;
    const hannibal = /Hannibal/i;

    cy.contains(joker);
    cy.contains(darth);
    cy.contains(hannibal);

    anchor.trigger("keyup", { key: "Enter" });

    cy.should("not.contain", joker);
    cy.should("not.contain", darth);
    cy.should("not.contain", hannibal);

    anchor.trigger("keyup", { key: "Enter" });

    cy.contains(joker);
    cy.contains(darth);
    cy.contains(hannibal);
  });

  it("should select option and clear it", () => {
    const character = "Iron Man";
    cy.contains(character).click();
    cy.get(selectors.trigger).should("contain", character);
    cy.get(selectors.clearButton).click();
    cy.get(selectors.trigger).should("contain", "Select...");
    cy.get(selectors.clearButton).should("not.exist");
  });

  it("should scroll in popover and select option", () => {
    const character = "Doctor Strange";
    cy.get(selectors.popoverList).scrollTo("bottom");
    cy.contains(character)
      .should("be.visible")
      .click();
    cy.get(selectors.trigger).should("contain", character);
  });

  describe("ListBox single select filter", () => {
    it("should show correct amount of options and select one", () => {
      cy.get(selectors.filterInput)
        .focus()
        .type("w", typingDelay);
      cy.get(selectors.popoverList)
        .children()
        .should("have.length", 4)
        .contains(/catwoman/i)
        .click();
      cy.get(selectors.trigger).should("contain", "Catwoman");
    });

    it("should be able to type spaces to filter options to select one", () => {
      cy.get(selectors.filterInput)
        .focus()
        .type("Freddy Krueger", typingDelay);
      cy.get(selectors.popoverList)
        .children()
        .should("have.length", 1)
        .contains(/Freddy Krueger/i)
        .click();
      cy.get(selectors.trigger).should("contain", "Freddy Krueger");
    });

    it("should show all options after erasing filtered input", () => {
      cy.get(selectors.filterInput)
        .focus()
        .type("wo{backspace}{backspace}", typingDelay);
      cy.get(selectors.popoverList)
        .children()
        .should("have.length", 24);
    });
  });

  describe("ListBox single select label filter", () => {
    it("should filter by option label", () => {
      cy.get(selectors.filterInput)
        .focus()
        .type("spi", typingDelay);
      cy.get(selectors.popoverList)
        .children()
        .should("have.length", 2);
    });
  });
});

describe("ListBox single select popover with getScrollContainer", () => {
  // can't create a failing test
  it("should scroll with trigger", () => {
    cy.visitStorybook(`${storyPrefix}-backyard-tests--with-container-scroll-story`);
    toggleDropdown();
    cy.scrollTo("top");
    cy.get(selectors.popover)
      .should("be.visible")
      .should("have.css", "top")
      // 468 was taken from cypress expectation of where popover should be after scroll
      .and("match", /46*/);
  });
});

describe("ListBox single select custom filter", () => {
  it("should filter with correct group options or show no results", () => {
    cy.visitStorybook(`${storyPrefix}-backyard-tests--custom-filter-story`);
    toggleDropdown();
    cy.get(selectors.filterInput)
      .focus()
      .type("P", typingDelay);
    cy.get(selectors.popoverList)
      .children()
      .should("have.length", 2);
    cy.get(selectors.filterInput).type("{backspace}");
    cy.get(selectors.popoverList)
      .children()
      .should("have.length", 7);
    cy.get(selectors.filterInput)
      .focus()
      .type("{backspace}ZZ", typingDelay);
    cy.get(selectors.popoverList).then($e => {
      expect($e.find("ul").children().length).to.be.equal(0);
    });

    cy.get(selectors.noResults).should("contain", "No results found");
  });
});

describe("ListBox multi select filter", () => {
  beforeEach(() => {
    cy.visitStorybook(`${storyPrefix}-backyard-tests--multi-with-filter-story`);
    toggleDropdown();
  });

  it("should filter, select, deselect and close trigger", () => {
    cy.get(selectors.filterInput)
      .focus()
      .type("w", typingDelay);
    cy.get(selectors.popoverList)
      .children()
      .should("have.length", 4)
      .contains(/spawn/i)
      .click();

    cy.contains(/wolverine/i).click();
    cy.contains(/catwoman/i).click();
    cy.contains("li", /spawn/i).click();

    cy.get("body").click({ force: true });

    cy.get(selectors.trigger)
      .should("contain", "(2)")
      .and("contain", "Wolverine, Catwoman");
  });

  // TODO: Flakey spec, works locally but fails on semaphore
  xit("should be able to use keys to select option", () => {
    cy.get(selectors.filterInput)
      .type("{downarrow}", typingDelay)
      .type("{enter}");
    cy.get("body").click({ force: true });
    cy.get(selectors.trigger).should("contain", "Punisher");
  });
});
