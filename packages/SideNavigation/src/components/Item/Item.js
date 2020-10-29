import React from "react";
import PropTypes from "prop-types";

import * as sc from "./Item.styles";

function Item(props) {
  const { children, isCurrent, ...moreProps } = props;

  return (
    <li>
      <sc.Item
        data-has-forced-focus="true"
        data-pka-anchor="sideNavigation.item"
        aria-current={isCurrent}
        isCurrent={isCurrent}
        {...moreProps}
      >
        {children}
      </sc.Item>
    </li>
  );
}

const propTypes = {
  children: PropTypes.node,

  /** If this side navigation item is the current page and should be highlighted. */
  isCurrent: PropTypes.bool,
};

const defaultProps = {
  children: null,
  isCurrent: false,
};

Item.displayName = "SideNavigation.Item";
Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

export default Item;
