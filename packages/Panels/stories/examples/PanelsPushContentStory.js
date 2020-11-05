import React from "react";
import Button from "@paprika/button";
import Panels from "../../src/Panels";
import { Nav, TextLine } from "../helpers";

const PanelsPushContentStory = props => {
  const { disableBodyOverflow, hasOverlay, pushContentWidth, width } = props;
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(state => !state);
  };
  const getMainElement = () => document.querySelector("div[role='main']");

  return (
    <React.Fragment>
      <Nav />
      <Panels
        disableBodyOverflow={disableBodyOverflow}
        getPushContentElement={getMainElement}
        isOpen={isOpen}
        onClose={toggle}
        pushContentWidth={pushContentWidth}
        width={width}
      >
        {hasOverlay ? <Panels.Overlay /> : null}
        <Panels.Trigger kind={Panels.types.kind.PRIMARY} onClick={toggle}>
          {isOpen ? "close" : "open"}
        </Panels.Trigger>
        <Panels.Header kind={Panels.Header.types.kind.PRIMARY}>Header</Panels.Header>
        <TextLine repeat={100} />
        <Panels.Footer>
          <Button>Default action</Button>
          <Button kind={Button.types.kind.MINOR}>Cancel</Button>
        </Panels.Footer>
      </Panels>
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

export default PanelsPushContentStory;
