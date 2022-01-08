import React from "react";
import tokens from "@paprika/tokens";
import Button from "@paprika/button";
import Panel from "../../src";
import { TextLine } from "../helpers";

export default function FromBottom() {
  const [isFooterOpen, setIsFooterOpen] = React.useState(true);
  const [isNavOpen, setIsNavOpen] = React.useState(true);
  const navWidth = { expanded: 295, collapsed: 32 };
  const storyPadding = 24;

  const toggleFooter = () => {
    setIsFooterOpen(state => !state);
  };
  const toggleNav = () => {
    setIsNavOpen(state => !state);
  };

  function getNavWidth() {
    return isNavOpen ? navWidth.expanded : navWidth.collapsed;
  }

  return (
    <>
      <div style={{ display: "flex", height: "100vh" }}>
        <nav style={{ flex: `0 0 ${getNavWidth()}px`, background: tokens.color.diligentLighten70 }}>
          <Button kind="primary" type="button" onClick={toggleNav} style={{ margin: "10px" }}>
            {isNavOpen ? <span>&laquo;</span> : <span>&raquo;</span>}
          </Button>
        </nav>
        <div style={{ flex: 1, padding: "10px" }}>
          <p>Try toggling the div on the left and notice the Panel&apos;s width adjusts (controlled by consumer).</p>
          <Button kind="primary" type="button" onClick={toggleFooter}>
            {isFooterOpen ? "Close" : "Open"} The Bottom Panel
          </Button>
        </div>
      </div>
      <Panel
        height={150}
        isOpen={isFooterOpen}
        offset={{ left: getNavWidth() + storyPadding }}
        onClose={toggleFooter}
        slideFrom={Panel.types.slideFrom.BOTTOM}
      >
        <Panel.Content>
          This Panel comes up from the bottom.
          <TextLine repeat={10} />
          Pretty neat, eh?
        </Panel.Content>
      </Panel>
    </>
  );
}
