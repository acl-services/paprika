import { getStoryUrlPrefix } from "../../../.storybook/storyTree";

const storyPrefix = `${getStoryUrlPrefix("Panel")}`;
const testStory = "panel-tests";

describe("<Panel />", () => {
  it("should convert <Panel offset={} /> into sticky mode", () => {
    cy.visitStorybook(`${testStory}--panel-default-sticky-story`);
    cy.findByTestId("purple-navigator").should("be.visible");
    cy.findByTestId("panel").then($element => {
      expect($element.css("top")).to.be.equal("40px");
    });

    cy.scrollTo(0, 200);

    cy.wait(500); // wait a little bit for the scrolling
    cy.findByTestId("panel").then($element => {
      expect($element.css("top")).to.be.equal("0px");
    });
  });

  it("should include footer in sticky mode", () => {
    cy.visitStorybook(`${testStory}--panel-footer-sticky-story`);
    cy.findByTestId("panel.footer").then($element => {
      expect($element.css("bottom")).to.be.equal("0px");
    });
  });

  it("should put focus on element with data-autofocus", () => {
    cy.visitStorybook(`${storyPrefix}-examples--focus-lock`);
    const input = cy.get("[data-autofocus]");
    const testString = "hello world";
    input.type(testString).should("have.value", testString);
  });

  it("should have no focused element if pass autofocus=false to Panel.FocusLock", () => {
    cy.visitStorybook(`${testStory}--panel-focus-lock-disabled-story`);
    cy.findByTestId("panel").should("be.visible");
    cy.focused().should("not.exist");
  });

  it("should be possible to interact with multiple panels in a group", () => {
    cy.visitStorybook(`${storyPrefix}-examples--group-panel`);

    const sidePanel1 = cy.findByTestId("panel1");
    const sidePanel2 = cy.findByTestId("panel2");
    const sidePanelChild = cy.findByTestId("panel-child");
    sidePanel1.should("be.visible");
    sidePanel2.should("be.visible");
    sidePanelChild.should("be.visible");

    cy.findByTestId("button-panel1").click();
    cy.findByTestId("panel1").should("not.exist");

    cy.findByTestId("button-panel2").click();
    cy.findByTestId("panel2").should("not.exist");

    cy.findByTestId("button-panel1").click();
    cy.findByTestId("panel1").should("exist");

    cy.findByTestId("button-panel2").click();
    cy.findByTestId("panel2").should("exist");

    cy.contains(/Toggle Child/i).click();

    sidePanelChild.should("exist");
    sidePanelChild.should("be.visible");

    cy.contains(/Toggle Child/i).click();

    cy.findByTestId("panel-child").should("not.exist");
  });

  let count = 1;
  it("should call onAfterOpen and onAfterClose", () => {
    cy.visitStorybook(`${testStory}--panel-on-after-story`).then(() => {
      cy.on("window:alert", str => {
        if (count === 1) {
          expect(str).to.equal("after open");
          count += 1;
          return;
        }
        expect(str).to.equal("after close");
      });

      // simulating the user take 700ms before clicking close
      cy.wait(1000).then(() => {
        cy.get('[data-pka-anchor="panel.header.close"]').click();
      });
    });
  });
});
