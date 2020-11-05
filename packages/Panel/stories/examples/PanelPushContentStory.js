import React from "react";
import Button from "@paprika/button";
import Panel from "../../src/Panel";
import { Nav, TextLine } from "../helpers";

const PanelPushContentStory = props => {
  const { disableBodyOverflow, hasOverlay, pushContentWidth, width } = props;
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(state => !state);
  };
  const getMainElement = () => document.querySelector("div[role='main']");

  return (
    <React.Fragment>
      <Nav />
      <Panel
        disableBodyOverflow={disableBodyOverflow}
        getPushContentElement={getMainElement}
        isOpen={isOpen}
        onClose={toggle}
        pushContentWidth={pushContentWidth}
        width={width}
      >
        {hasOverlay ? <Panel.Overlay /> : null}
        <Panel.Trigger kind={Panel.types.kind.PRIMARY} onClick={toggle}>
          {isOpen ? "close" : "open"}
        </Panel.Trigger>
        <Panel.Header kind={Panel.Header.types.kind.PRIMARY}>Header</Panel.Header>
        <TextLine repeat={100} />
        <Panel.Footer>
          <Button>Default action</Button>
          <Button kind={Button.types.kind.MINOR}>Cancel</Button>
        </Panel.Footer>
      </Panel>
      <div role="main">
        Lorem hipsum meditation cardigan +1, plaid brunch street cred cloud bread art party pickled, VHS fingerstache la
        croix paleo single-origin coffee. Pinterest normcore wayfarers gentrify marfa helvetica street art vegan.
        Wayfarers portland chicharrones craft beer sartorial. Cray raw denim listicle mixtape, pug farm-to-table tofu
        ennui whatever williamsburg. Chia offal slow-carb, kickstarter gastropub letterpress echo park mustache irony
        90s.
        <br />
        Lorem hipsum meditation cardigan +1, plaid brunch street cred cloud bread art party pickled, VHS fingerstache la
        croix paleo single-origin coffee. Pinterest normcore wayfarers gentrify marfa helvetica street art vegan.
        Wayfarers portland chicharrones craft beer sartorial. Cray raw denim listicle mixtape, pug farm-to-table tofu
        ennui whatever williamsburg. Chia offal slow-carb, kickstarter gastropub letterpress echo park mustache irony
        90s. <br />
        Lorem hipsum meditation cardigan +1, plaid brunch street cred cloud bread art party pickled, VHS fingerstache la
        croix paleo single-origin coffee. Pinterest normcore wayfarers gentrify marfa helvetica street art vegan.
        Wayfarers portland chicharrones craft beer sartorial. Cray raw denim listicle mixtape, pug farm-to-table tofu
        ennui whatever williamsburg. Chia offal slow-carb, kickstarter gastropub letterpress echo park mustache irony
        90s.
      </div>
    </React.Fragment>
  );
};

export default PanelPushContentStory;
