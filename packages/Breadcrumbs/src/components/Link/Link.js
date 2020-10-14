import React from "react";
import PropTypes from "prop-types";
import Popover from "@paprika/popover";
import IsDarkContext from "../../context";
import { MAXIMUM_NUM_OF_CHARACTER } from "../../constants";

import * as sc from "./Link.styles";

const truncate = str =>
  str.length > MAXIMUM_NUM_OF_CHARACTER ? `${str.substring(0, MAXIMUM_NUM_OF_CHARACTER)}...` : str;

function isString(item) {
  return typeof item === "string" || item instanceof String;
}

function Link(props) {
  const { children, href, as, ...moreProps } = props;
  const isDark = React.useContext(IsDarkContext);
  const shouldTruncate = isString(children) && children.length > MAXIMUM_NUM_OF_CHARACTER;

  const link = (
    <sc.Link data-pka-anchor="breadcrumbs.link" as={as} kind="minor" href={href} isDark={isDark} {...moreProps}>
      {shouldTruncate ? truncate(children) : children}
    </sc.Link>
  );

  return (
    <sc.ListItem data-pka-anchor="breadcrumbs.listItem">
      {shouldTruncate ? (
        <Popover isDark isEager>
          <Popover.Trigger>{link}</Popover.Trigger>
          <Popover.Content>
            <Popover.Card>{children}</Popover.Card>
          </Popover.Content>
          <Popover.Tip />
        </Popover>
      ) : (
        link
      )}
    </sc.ListItem>
  );
}

const propTypes = {
  children: PropTypes.node,

  /** Render as another component instead of Button.Link. */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

  /** Url for the link. */
  href: PropTypes.string,
};

const defaultProps = {
  children: null,
  as: null,
  href: "",
};

Link.displayName = "Breadcrumbs.Link";
Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
