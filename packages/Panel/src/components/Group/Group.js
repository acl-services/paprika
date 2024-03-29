import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { zValue } from "@paprika/stylers/lib/helpers";
import { extractChildren } from "../../helpers";
import Overlay from "../Overlay";
import * as sc from "./Group.styles";
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
  const { children, offsetY, ...moreProps } = props;
  const { Panel: sidePanels, "Panel.Overlay": OverlayExtracted } = extractChildren(children, [
    "Panel",
    "Panel.Overlay",
  ]);
  if (!Array.isArray(sidePanels)) {
    throw new Error("<Panel.Group /> is intented to be use with two or more Panels");
  }

  const offsetScroll = useOffsetScroll(offsetY);

  return ReactDOM.createPortal(
    <>
      {OverlayExtracted}
      <sc.Group {...moreProps} offsetY={offsetScroll} data-pka-anchor="panel.group">
        {sidePanels.map(sidePanel => React.cloneElement(sidePanel, { isInline: true, groupOffsetY: offsetY }))}
      </sc.Group>
    </>,
    document.body
  );
}

Group.propTypes = propTypes;
Group.defaultProps = defaultProps;
Group.Overlay = Overlay;
