import { getStoryUrlPrefix } from "../../../../.storybook/storyTree";

const selectors = {
  backButton: "[data-pka-anchor='listboxbrowser-listoption-back']",
  breadcrumbTitle: "[data-pka-anchor='breadcrumb-title']",
  counter: "[data-pka-anchor='listboxbrowser-optionselected-counter']",
  optionsSelected: "[data-pka-anchor='listbox-browser-selected-option']",
  optionsSelectedTrashbin: "[data-pka-anchor='listbox-browser-selected-option-trashbin']",
  title: "[data-pka-anchor='root-title']",
};

function backButtonClick() {
  return cy.get(selectors.backButton).click();
}

function getOptions(column) {
  return [...column.querySelectorAll("li")].map(item => item.textContent);
}

function includesAllOptions(browser, expectedOptions) {
  const options = getOptions(browser.get(0));
  return options.every(option => expectedOptions.includes(option));
}

function getRoot() {
  return cy.get("[role='listbox']").eq(0);
}

function getBrowser() {
  return cy.get("[role='listbox']").eq(1);
}

function navigateBrowser(label) {
  return getBrowser()
    .get("li")
    .contains(label)
    .click();
}

describe("ListBoxBrowser basic", () => {
  beforeEach(() => {
    cy.visitStorybook(`${getStoryUrlPrefix("ListBoxBrowser")}-backyard-tests--cypress`);
  });

  it("should have correct number of options", () => {
    getRoot()
      .children()
      .should("have.length", 4);

    getBrowser()
      .children()
      .should("have.length", 7);
  });

  it("should navigate to risk control matrix", () => {
    navigateBrowser("Risk Control Matrix").then(() => {
      getBrowser().then(browser => {
        const expectedOptions = ["Back", "Risk", "Control"];
        cy.log("expected Risk Control Matrix has the correct options");
        expect(includesAllOptions(browser, expectedOptions)).equals(true);
      });
    });
  });

  it("should navigate to Narratives", () => {
    navigateBrowser("Narratives").then(() => {
      getBrowser().then(browser => {
        const expectedOptions = ["Back", "0", "1", "2", "3"];
        cy.log("expected narratives has the correct options");
        expect(includesAllOptions(browser, expectedOptions)).equals(true);
      });
    });
  });

  it("should take you back clicking back button", () => {
    navigateBrowser("Narratives").then(() => {
      getBrowser().then(browser => {
        const expectedOptions = ["Back", "0", "1", "2", "3"];
        cy.log("expected Narratives has the correct options");
        expect(includesAllOptions(browser, expectedOptions)).equals(true);
        cy.log("expected clicking back button works");
        backButtonClick().then(() => {
          getBrowser()
            .children()
            .should("have.length", 7);
        });
      });
    });
  });

  it("should have Breadcrumb", () => {
    navigateBrowser("Risk Control Matrix").then(() => {
      navigateBrowser("Risk").then(() => {
        getBrowser().then(browser => {
          const expectedOptions = ["Back", "risk 1", "risk 2", "risk 3"];
          cy.log("expected Risk has the correct options");
          expect(includesAllOptions(browser, expectedOptions)).equals(true);
          cy.get(selectors.title).should("contain", "Phase");
          cy.get(selectors.breadcrumbTitle).should("contain", "Risk Control Matrix / Risk");
        });
      });
    });
  });

  it("should select options and then remove it", () => {
    getRoot()
      .children()
      .then(children => {
        children.get(0).click();
        children.get(2).click();
        children.get(3).click();
      });

    cy.get(selectors.counter).should("contain", "3");
    cy.get(selectors.optionsSelected).should("have.length", 3);

    getBrowser()
      .children()
      .then(children => {
        children.get(0).click();
        children.get(3).click();
        children.get(4).click();
      });

    cy.get(selectors.counter).should("contain", "6");
    cy.get(selectors.optionsSelected).should("have.length", 6);

    cy.get(selectors.optionsSelectedTrashbin).then(elements => {
      [...elements].forEach(element => {
        element.click();
      });
    });

    cy.get(selectors.counter).should("contain", "0");
  });

  it("should navigate to risk then back to the root browser and navigate again to risk using optionsSelected button", () => {
    navigateBrowser("Risk Control Matrix").then(() => {
      navigateBrowser("Risk").then(() => {
        getBrowser().then(browser => {
          const children = browser.children();
          children.get(1).click();
          children.get(2).click();
          children.get(3).click();
          backButtonClick();
          backButtonClick();

          cy.get(selectors.optionsSelected)
            .children()
            .then(elements => {
              // this should navigate to the Risk view on browser column using the option on OptionSelected
              elements.get(0).click();
              const expectedOptions = ["Back", "risk 1", "risk 2", "risk 3"];
              cy.log("expected Risk has the correct options");
              expect(includesAllOptions(browser, expectedOptions)).equals(true);
              cy.get(selectors.title).should("contain", "Phase");
              cy.get(selectors.breadcrumbTitle).should("contain", "Risk Control Matrix / Risk");
            });
        });
      });
    });
  });

  it("Should have background in green color indicating active root option", () => {
    getRoot()
      .children()
      .then(element => {
        expect(window.getComputedStyle(element.get(1)).backgroundColor).equals("rgb(231, 243, 237)");
      });
  });
});
