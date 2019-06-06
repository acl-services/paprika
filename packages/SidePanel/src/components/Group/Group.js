import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { extractChildren } from "../../helpers";
import Overlay from "../Overlay";
import { GroupCSS } from "./Group.styles";
import useOffsetScroll from "../../hooks/useOffsetScroll";

const propTypes = {
  children: PropTypes.node.isRequired,
  offsetY: PropTypes.number,
};

const defaultProps = {
  offsetY: 0,
};

export default function Group(props) {
  const { children, ...moreProps } = props;
  const { SidePanel: sidePanels, "SidePanel.Overlay": OverlayExtracted } = extractChildren(children, [
    "SidePanel",
    "SidePanel.Overlay",
  ]);
  if (!Array.isArray(sidePanels)) {
    throw new Error("SidePanelGroup is intented to be use with two or more SidePanels");
  }

  const offsetScroll = useOffsetScroll(props.offsetY);

  if (sidePanels.filter(sidePanel => !sidePanel.props.isOpen).length === sidePanels.length) {
    return null;
  }

  const sidePanelsGroup = ReactDOM.createPortal(
    <React.Fragment>
      {OverlayExtracted}
      <div css={GroupCSS} {...moreProps} offsetY={offsetScroll}>
        {sidePanels.map((sidePanel, index) =>
          React.cloneElement(sidePanel, {
            ...sidePanel.props,
            isInline: true,
            key: `SidePanel_${index}`, // eslint-disable-line
            id: `SidePanel_${index}`,
          })
        )}
      </div>
    </React.Fragment>,
    document.body
  );

  return [sidePanelsGroup];
}

Group.propTypes = propTypes;
Group.defaultProps = defaultProps;
Group.Overlay = Overlay;
