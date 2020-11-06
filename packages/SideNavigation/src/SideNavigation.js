import React from "react";
import PropTypes from "prop-types";
import SidePanel from "@paprika/sidepanel";
import Button from "@paprika/button";
import Popover from "@paprika/popover";
import MenuIcon from "@paprika/icon/lib/Menu";
import useI18n from "@paprika/l10n/lib/useI18n";
import Item from "./components/Item";

import * as sc from "./SideNavigation.styles";

const SIDE_PANEL_WIDTH = "350px";

function SideNavigation(props) {
  const { a11yText, children, header, ...moreProps } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const triggerRef = React.useRef(null);
  const I18n = useI18n();

  function handleClickTrigger() {
    setIsOpen(prevState => !prevState);
  }

  function handleClose() {
    setIsOpen(false);
  }

  function handleAfterClose() {
    triggerRef.current.focus();
  }

  return (
    <sc.SideNavigationCollapsedWrapper>
      <Popover isDark isEager>
        <Popover.Trigger>
          {(handler, attributes) => (
            <sc.Trigger
              {...attributes}
              onMouseOver={handler}
              onMouseOut={handler}
              onFocus={handler}
              onBlur={handler}
              a11yText={I18n.t("sideNavigation.trigger_aria_label")}
              data-pka-anchor="sideNavigation.trigger"
              kind={Button.types.kind.MINOR}
              onClick={handleClickTrigger}
              size={Button.types.size.LARGE}
              ref={triggerRef}
            >
              <MenuIcon />
            </sc.Trigger>
          )}
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Card>{I18n.t("sideNavigation.trigger_aria_label")}</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
      <SidePanel
        isCompact
        isOpen={isOpen}
        isSlideFromLeft
        onClose={handleClose}
        onAfterClose={handleAfterClose}
        width={SIDE_PANEL_WIDTH}
        {...moreProps}
      >
        <SidePanel.Header>{header}</SidePanel.Header>
        <sc.SidePanelContent>
          <nav aria-label={a11yText || I18n.t("sideNavigation.aria_label")}>
            <ul>{children}</ul>
          </nav>
        </sc.SidePanelContent>
      </SidePanel>
    </sc.SideNavigationCollapsedWrapper>
  );
}

const propTypes = {
  /** Aria-label on the nav element. */
  a11yText: PropTypes.string,

  children: PropTypes.node,

  /** Header text in the side panel. */
  header: PropTypes.node,
};

const defaultProps = {
  a11yText: null,
  children: null,
  header: null,
};

SideNavigation.displayName = "SideNavigation";
SideNavigation.propTypes = propTypes;
SideNavigation.defaultProps = defaultProps;

SideNavigation.Item = Item;

export default SideNavigation;
