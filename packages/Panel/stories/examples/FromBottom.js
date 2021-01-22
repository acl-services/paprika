import React from "react";
import Panel from "../../src";
import { TextLine } from "../helpers";

export default function FromBottom() {
  const [isFooterOpen, setIsFooterOpen] = React.useState(true);
  const [isNavOpen, setIsNavOpen] = React.useState(true);
  const navWidth = { expanded: 300, collapsed: 30 };

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
    <React.Fragment>
      <div style={{ display: "flex", height: "100vh" }}>
        <nav style={{ flex: `0 0 ${getNavWidth()}px`, background: "red" }}>
          <button type="button" onClick={toggleNav}>
            {isNavOpen ? <span>&laquo;</span> : <span>&raquo;</span>}
          </button>
        </nav>
        <div style={{ flex: 1, padding: "10px" }}>
          <p>Try toggling the div on the left and notice the Panel&apos;s width adjusts (controlled by consumer).</p>
          <button type="button" onClick={toggleFooter}>
            {isFooterOpen ? "close" : "open"} the bottom Panel
          </button>
        </div>
      </div>

      <Panel
        height={150}
        isOpen={isFooterOpen}
        offset={{ left: getNavWidth() }}
        onClose={toggleFooter}
        slideFrom={Panel.types.slideFrom.BOTTOM}
      >
        <Panel.Content>
          This Panel comes up from the bottom.
          <TextLine repeat={10} />
          Pretty neat, eh?
        </Panel.Content>
      </Panel>
    </React.Fragment>
  );
}
