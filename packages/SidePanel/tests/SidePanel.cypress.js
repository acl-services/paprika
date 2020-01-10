describe("<SidePanel />", () => {
  it("should convert <SidePanel offset={} /> into sticky mode", () => {
    cy.visitStorybook("sidepanel-cypress--sidepanel-default-sticky");
    cy.getByTestId("purple-navigator").should("be.visible");
    cy.getByTestId("sidepanel").then($element => {
      expect($element.css("top")).to.be.equal("40px");
    });

    cy.scrollTo(0, 200);

    cy.wait(500); // wait a little bit for the scrolling
    cy.getByTestId("sidepanel").then($element => {
      expect($element.css("top")).to.be.equal("0px");
    });
  });

  it("should include footer in sticky mode", () => {
    cy.visitStorybook("sidepanel-cypress--sidepanel-footer-sticky");
    cy.getByTestId("sidepanel.footer").then($element => {
      expect($element.css("bottom")).to.be.equal("0px");
    });
  });

  it("should put focus on element with data-autofocus", () => {
    cy.visitStorybook("sidepanel-focuslock--with-autofocus-on-input");
    const input = cy.get("[data-autofocus]");
    const testString = "hello world";
    input.type(testString).should("have.value", testString);
  });

  it("should have no focused element if pass autofocus=false to SidePanel.FocusLock", () => {
    cy.visitStorybook("sidepanel-focuslock--with-disabled-autofocus");
    cy.getByTestId("sidepanel").should("be.visible");
    cy.focused().should("not.exist");
  });

  it("should be possible to interact with multiple sidepanels in a group", () => {
    cy.visitStorybook("sidepanel--multiple-sidepanels");

    const sidePanel1 = cy.getByTestId("sidepanel1");
    const sidePanel2 = cy.getByTestId("sidepanel2");
    const sidePanelChild = cy.getByTestId("sidepanel-child");
    sidePanel1.should("be.visible");
    sidePanel2.should("be.visible");
    sidePanelChild.should("be.visible");

    cy.getByTestId("button-sidepanel1").click();
    cy.getByTestId("sidepanel1").should("not.exist");

    cy.getByTestId("button-sidepanel2").click();
    cy.getByTestId("sidepanel2").should("not.exist");

    cy.getByTestId("button-sidepanel1").click();
    cy.getByTestId("sidepanel1").should("exist");

    cy.getByTestId("button-sidepanel2").click();
    cy.getByTestId("sidepanel2").should("exist");

    cy.contains(/Toggle Child/i).click();

    sidePanelChild.should("exist");
    sidePanelChild.should("be.visible");

    cy.contains(/Toggle Child/i).click();

    cy.getByTestId("sidepanel-child").should("not.exist");
  });

  let count = 1;
  it("should call onAfterOpen and onAfterClose", () => {
    cy.visitStorybook("sidepanel-cypress--sidepanel-onafteropen-onafterclose").then(() => {
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
        cy.get('[data-pka-anchor="sidepanel-header-close"]').click();
      });
    });
  });
});
