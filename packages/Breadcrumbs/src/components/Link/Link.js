import React from "react";
import PropTypes from "prop-types";
import Popover from "@paprika/popover";
import useI18n from "@paprika/l10n/lib/useI18n";
import IsDarkContext from "../../context";
import { MAXIMUM_NUM_OF_CHARACTER } from "../../constants";

import * as sc from "./Link.styles";

const truncate = str =>
  str.length > MAXIMUM_NUM_OF_CHARACTER ? `${str.substring(0, MAXIMUM_NUM_OF_CHARACTER)}...` : str;

function isString(item) {
  return typeof item === "string" || item instanceof String;
}

function Link(props) {
  const { children, hasOnlyOneChild, href, as, ...moreProps } = props;
  const isDark = React.useContext(IsDarkContext);
  const I18n = useI18n();
  const shouldTruncate = isString(children) && children.length > MAXIMUM_NUM_OF_CHARACTER;

  const link = (
    <sc.Link data-pka-anchor="breadcrumbs.link" as={as} kind="minor" href={href} isDark={isDark} {...moreProps}>
      {hasOnlyOneChild ? <sc.ArrowIcon aria-label={I18n.t("breadcrumbs.aria_back_to")} /> : null}
      {shouldTruncate ? truncate(children) : children}
    </sc.Link>
  );

  return (
    <sc.ListItem data-pka-anchor="breadcrumbs.list-item">
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

  hasOnlyOneChild: PropTypes.bool,

  /** Url for the link. */
  href: PropTypes.string,
};

const defaultProps = {
  children: null,
  as: null,
  hasOnlyOneChild: false,
  href: "",
};

Link.displayName = "Breadcrumbs.Link";
Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
