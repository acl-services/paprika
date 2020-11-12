import { getStoryUrlPrefix } from "../../../.storybook/storyTree";

const storyPrefix = `${getStoryUrlPrefix("Panel")}`;
const testStory = "panel-tests";

describe("<Panel />", () => {
  it("should convert <Panel offset={} /> into sticky mode", () => {
    cy.visitStorybook(`${testStory}--side-panel-default-sticky`);
    cy.getByTestId("purple-navigator").should("be.visible");
    cy.getByTestId("panel").then($element => {
      expect($element.css("top")).to.be.equal("40px");
    });

    cy.scrollTo(0, 200);

    cy.wait(500); // wait a little bit for the scrolling
    cy.getByTestId("panel").then($element => {
      expect($element.css("top")).to.be.equal("0px");
    });
  });

  it("should include footer in sticky mode", () => {
    cy.visitStorybook(`${testStory}--side-panel-footer-sticky`);
    cy.getByTestId("panel.footer").then($element => {
      expect($element.css("bottom")).to.be.equal("0px");
    });
  });

  it("should put focus on element with data-autofocus", () => {
    cy.visitStorybook(`${storyPrefix}-examples--focuslock`);
    const input = cy.get("[data-autofocus]");
    const testString = "hello world";
    input.type(testString).should("have.value", testString);
  });

  it("should have no focused element if pass autofocus=false to Panel.FocusLock", () => {
    cy.visitStorybook(`${testStory}--side-panel-focus-lock-disabled`);
    cy.getByTestId("panel").should("be.visible");
    cy.focused().should("not.exist");
  });

  it("should be possible to interact with multiple panels in a group", () => {
    cy.visitStorybook(`${storyPrefix}-examples--group`);

    const sidePanel1 = cy.getByTestId("panel1");
    const sidePanel2 = cy.getByTestId("panel2");
    const sidePanelChild = cy.getByTestId("panel-child");
    sidePanel1.should("be.visible");
    sidePanel2.should("be.visible");
    sidePanelChild.should("be.visible");

    cy.getByTestId("button-panel1").click();
    cy.getByTestId("panel1").should("not.exist");

    cy.getByTestId("button-panel2").click();
    cy.getByTestId("panel2").should("not.exist");

    cy.getByTestId("button-panel1").click();
    cy.getByTestId("panel1").should("exist");

    cy.getByTestId("button-panel2").click();
    cy.getByTestId("panel2").should("exist");

    cy.contains(/Toggle Child/i).click();

    sidePanelChild.should("exist");
    sidePanelChild.should("be.visible");

    cy.contains(/Toggle Child/i).click();

    cy.getByTestId("panel-child").should("not.exist");
  });

  let count = 1;
  it("should call onAfterOpen and onAfterClose", () => {
    cy.visitStorybook(`${testStory}--side-panel-on-after`).then(() => {
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
