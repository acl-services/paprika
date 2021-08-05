import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
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
  const isUsingDefaultLinkComponent = !as;
  const commonComponentProps = {
    "data-pka-anchor": "breadcrumbs.link",
    as: isUsingDefaultLinkComponent ? Button.Link : as,
    isDark,
  };
  const defaultLinkComponentProps = isUsingDefaultLinkComponent
    ? {
        ...commonComponentProps,
        kind: Button.types.kind.MINOR,
        href,
      }
    : commonComponentProps;
  const arrowIcon = hasOnlyOneChild ? <sc.ArrowIcon aria-label={I18n.t("breadcrumbs.aria_back_to")} /> : null;

  return (
    <sc.ListItem data-pka-anchor="breadcrumbs.list-item">
      {shouldTruncate ? (
        <Popover isDark isEager>
          <Popover.Trigger>
            {(handler, a11yAttributes) => (
              <sc.Link
                {...defaultLinkComponentProps}
                onMouseOver={handler}
                onMouseOut={handler}
                onFocus={handler}
                onBlur={handler}
                tabIndex={isUsingDefaultLinkComponent ? undefined : 0}
                {...a11yAttributes}
                {...moreProps}
              >
                {arrowIcon}
                {truncate(children)}
              </sc.Link>
            )}
          </Popover.Trigger>

          <Popover.Content>
            <Popover.Card>{children}</Popover.Card>
          </Popover.Content>
          <Popover.Tip />
        </Popover>
      ) : (
        <sc.Link {...defaultLinkComponentProps} {...moreProps}>
          {arrowIcon}
          {children}
        </sc.Link>
      )}
    </sc.ListItem>
  );
}

const propTypes = {
  children: PropTypes.node,

  /** Render as another component instead of Button.Link. */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),

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
