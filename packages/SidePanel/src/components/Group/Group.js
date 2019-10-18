import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { zValue } from "@paprika/stylers/lib/helpers";
import { extractChildren } from "../../helpers";
import Overlay from "../Overlay";
import { groupCSS } from "./Group.styles";
import useOffsetScroll from "../../hooks/useOffsetScroll";

const propTypes = {
  children: PropTypes.node.isRequired,
  offsetY: PropTypes.number,
  zIndex: PropTypes.number,
};

const defaultProps = {
  offsetY: 0,
  zIndex: zValue(6),
};

export default function Group(props) {
  const { children, ...moreProps } = props;
  const { SidePanel: sidePanels, "SidePanel.Overlay": OverlayExtracted } = extractChildren(children, [
    "SidePanel",
    "SidePanel.Overlay",
  ]);
  if (!Array.isArray(sidePanels)) {
    throw new Error("<SidePanel.Group /> is intented to be use with two or more SidePanels");
  }

  const offsetScroll = useOffsetScroll(props.offsetY);

  if (sidePanels.filter(sidePanel => !sidePanel.props.isOpen).length === sidePanels.length) {
    return null;
  }

  return ReactDOM.createPortal(
    <React.Fragment>
      {OverlayExtracted}
      <div css={groupCSS} {...moreProps} offsetY={offsetScroll}>
        {sidePanels.map(sidePanel => React.cloneElement(sidePanel, { isInline: true }))}
      </div>
    </React.Fragment>,
    document.body
  );
}

Group.propTypes = propTypes;
Group.defaultProps = defaultProps;
Group.Overlay = Overlay;
