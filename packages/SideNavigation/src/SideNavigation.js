import React from "react";
import PropTypes from "prop-types";
import SidePanel from "@paprika/sidepanel";
import Button from "@paprika/button";
import MenuIcon from "@paprika/icon/lib/Menu";
import useI18n from "@paprika/l10n/lib/useI18n";
import Item from "./components/Item";

import * as sc from "./SideNavigation.styles";

const SIDE_PANEL_WIDTH = "350px";

function SideNavigation(props) {
  const { children, header, ...moreProps } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const contentRef = React.useRef(null);
  const I18n = useI18n();

  function handleClickTrigger() {
    setIsOpen(prevState => !prevState);
  }

  function handleClose() {
    setIsOpen(false);
  }

  function handleAfterOpen() {
    if (contentRef && contentRef.current) {
      contentRef.current.querySelector('[data-pka-anchor="sideNavigation.item"]').focus();
    }
  }

  if (isOpen) {
    return (
      <SidePanel
        isCompact
        isOpen={isOpen}
        isSlideFromLeft
        onAfterOpen={handleAfterOpen}
        onClose={handleClose}
        width={SIDE_PANEL_WIDTH}
        {...moreProps}
      >
        <SidePanel.Header>{header}</SidePanel.Header>
        <sc.SidePanelContent ref={contentRef}>
          <ul>{children}</ul>
        </sc.SidePanelContent>
      </SidePanel>
    );
  }

  return (
    <sc.SideNavigationCollapsedWrapper>
      <Button.Icon
        a11yText={I18n.t("sideNavigation.trigger_aria_label")}
        data-pka-anchor="sideNavigation.trigger"
        kind={Button.types.kind.MINOR}
        onClick={handleClickTrigger}
        size={Button.types.size.LARGE}
      >
        {/* TODO: delete it in wasabicons */}
        <MenuIcon />
      </Button.Icon>
    </sc.SideNavigationCollapsedWrapper>
  );
}

const propTypes = {
  children: PropTypes.node,

  /** Header text in the side panel. */
  header: PropTypes.node,
};

const defaultProps = {
  children: null,
  header: null,
};

SideNavigation.displayName = "SideNavigation";
SideNavigation.propTypes = propTypes;
SideNavigation.defaultProps = defaultProps;

SideNavigation.Item = Item;

export default SideNavigation;
