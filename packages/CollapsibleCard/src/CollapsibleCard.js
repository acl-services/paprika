import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Button from "@paprika/button";
import { extractChildren } from "@paprika/helpers";
import ArrowUpIcon from "@paprika/icon/lib/ArrowUp";

import Body from "./components/Body";
import Header from "./components/Header";
// import Metadata from "./components/Metadata";

// import * as sc from "./CollapsibleCard.styles";
import "./CollapsibleCard.scss";

// TODO: convert to use .styles not .scss

export default function CollapsibleCard(props) {
  const { children, type, ...moreProps } = props;
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const [labelTextId] = React.useState(() => `collapsible-card-label_${uuidv4()}`);
  const [metadataId] = React.useState(() => `collapsible-card-metadata_${uuidv4()}`);
  const {
    // "CollapsibleCard.Avatar": avatar,
    "CollapsibleCard.Body": body,
    "CollapsibleCard.Header": header,
    // "CollapsibleCard.Metadata": metadata,
    children: otherElements,
  } = extractChildren(children, ["CollapsibleCard.Body", "CollapsibleCard.Header"]);

  // React.useEffect(() => {
  //   if (!isCollapsed && onExpand) {
  //     onExpand();
  //   }
  // }, [isCollapsed, onExpand]);

  // function getLabel() {
  //   return (
  //     <sc.Label>
  //       {avatar}
  //       <div>
  //         <sc.LabelText id={labelTextId}>{label}</sc.LabelText>
  //         {metadata ? React.cloneElement(metadata, { id: metadataId }) : null}
  //       </div>
  //     </sc.Label>
  //   );
  // }

  function handleClick() {
    setIsCollapsed(prevIsCollapsed => !prevIsCollapsed);
  }

  // return (
  //   <sc.CollapsibleCard
  //     iconAlign="right"
  //     label={typeof label === "function" ? label({ isCollapsed }) : getLabel()}
  //     isCollapsed={isCollapsed}
  //     onClick={handleClick}
  //     hasAvatar={!!avatar}
  //     hasLabelOnly={!avatar && !metadata}
  //     triggerAriaDescribedby={`${labelTextId} ${metadata ? metadataId : ""}`}
  //     {...moreProps}
  //   >
  //     <sc.Content hasDivider={hasDivider}>{otherElements}</sc.Content>
  //   </sc.CollapsibleCard>
  // );

  // return (
  //   <sc.CollapsibleCard>
  //     <Header onClick={handleClick} type={type}>
  //       <div>{header.props.children}</div>
  //       <Arrow />
  //     </Header>
  //     <sc.Body>{body}</sc.Body>
  //   </sc.CollapsibleCard>
  // );
  const isCollapsedClassname = isCollapsed ? "collapsible-card--collapsed" : "";

  let typeClassname = "";
  if (header.props.type === "half") {
    typeClassname = "collapsible-card-header--half";
  } else if (header.props.type === "third") {
    typeClassname = "collapsible-card-header--third";
  }

  return (
    <div className={`collapsible-card ${isCollapsedClassname}`}>
      <div className={`collapsible-card-header ${typeClassname}`}>
        <div className="collapsible-card-header__content">{header.props.children}</div>
        <div className="collapsible-card-header__expand-toggle">
          <Button.Icon onClick={handleClick} kind="minor">
            <ArrowUpIcon />
          </Button.Icon>
        </div>
      </div>
      <div className="collapsible-card-body">{body.props.children}</div>
    </div>
  );
}

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

CollapsibleCard.propTypes = propTypes;
CollapsibleCard.defaultProps = defaultProps;

CollapsibleCard.Body = Body;
CollapsibleCard.Header = Header;
