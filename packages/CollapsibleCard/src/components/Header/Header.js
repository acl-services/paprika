import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import ArrowUpIcon from "@paprika/icon/lib/ArrowUp";
import CollapsibleCardContext from "../../CollapsibleCardContext";
// import * as sc from "./Header.styles";

export default function Header(props) {
  const { children, width, ...moreProps } = props;
  const context = React.useContext(CollapsibleCardContext);

  // all we allow is 'segment' children
  // count how many there are
  // add widths to them

  return (
    <div className="collapsible-card-header">
      <div className="collapsible-card-header__content">{children}</div>
      <div className="collapsible-card-header__expand-toggle">
        <Button.Icon
          onClick={() => {
            context.setIsCollapsed(isCollapsed => !isCollapsed);
          }}
          kind="minor"
        >
          <ArrowUpIcon />
        </Button.Icon>
      </div>
    </div>
  );
  // return <sc.Header {...moreProps}>{children}</sc.Header>;
}

const propTypes = {
  children: PropTypes.node,
  width: PropTypes.number,
};

const defaultProps = {
  children: null,
  width: null,
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
Header.displayName = "CollapsibleCard.Header";
