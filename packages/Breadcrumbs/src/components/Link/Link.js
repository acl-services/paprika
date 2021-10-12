import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import Popover from "@paprika/popover";
import { useI18n } from "@paprika/l10n";
import { extractChildren, extractChildrenProps } from "@paprika/helpers";
import LinkTooltipContentPropsCollector from "./LinkTooltipContentPropsCollector";
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
  const I18n = useI18n();
  const isDark = React.useContext(IsDarkContext);
  const {
    children: [extractedChildren],
  } = extractChildren(children, ["Breadcrumbs.Link.Tooltip"]);
  const TooltipProps = extractChildrenProps(children, LinkTooltipContentPropsCollector);
  const shouldTruncate = isString(extractedChildren) && extractedChildren.length > MAXIMUM_NUM_OF_CHARACTER;
  const isUsingDefaultLinkComponent = !as;
  const commonComponentProps = {
    "data-pka-anchor": "breadcrumbs.link",
    as: isUsingDefaultLinkComponent ? Button.Link : as,
    href: href || undefined,
    isDark,
  };
  if (isUsingDefaultLinkComponent) {
    commonComponentProps.kind = Button.types.kind.MINOR;
  }

  function renderBackIcon() {
    return hasOnlyOneChild ? (
      <sc.BackIcon aria-label={I18n.t("breadcrumbs.aria_back_to")} data-pka-anchor="breadcrumbs.back-icon" />
    ) : null;
  }

  return (
    <sc.ListItem data-pka-anchor="breadcrumbs.list-item" isUsingDefaultLinkComponent={isUsingDefaultLinkComponent}>
      {shouldTruncate ? (
        <Popover isDark isEager>
          <Popover.Trigger>
            {(handler, a11yAttributes) => (
              <sc.Link
                {...commonComponentProps}
                onMouseOver={handler}
                onMouseOut={handler}
                onFocus={handler}
                onBlur={handler}
                tabIndex={isUsingDefaultLinkComponent ? undefined : 0}
                {...a11yAttributes}
                {...moreProps}
              >
                {renderBackIcon()}
                {truncate(extractedChildren)}
              </sc.Link>
            )}
          </Popover.Trigger>

          <Popover.Content {...TooltipProps}>
            <Popover.Card>{extractedChildren}</Popover.Card>
          </Popover.Content>
          <Popover.Tip />
        </Popover>
      ) : (
        <sc.Link {...commonComponentProps} {...moreProps}>
          {renderBackIcon()}
          {extractedChildren}
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
  href: null,
};

Link.displayName = "Breadcrumbs.Link";
Link.Tooltip = LinkTooltipContentPropsCollector;
Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
