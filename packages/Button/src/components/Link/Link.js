import React from "react";
import PropTypes from "prop-types";
import NewTabIcon from "@paprika/icon/lib/NewTab";
import * as constants from "@paprika/constants/lib/Constants";
import * as types from "../../types";
import * as sc from "./LinkButton.styles";
import { ButtonIcon } from "../../Button";

const Link = React.forwardRef((props, ref) => {
  const { a11yText, children, href, isDisabled, shouldOpenNewTab, kind, icon, size, suffixIcon, ...moreProps } = props;

  const shouldOpenNewTabProps = {
    target: "_blank",
    rel: "noopener noreferrer",
  };

  function renderSuffix({ kind, isDisabled, suffixIcon, shouldOpenNewTab }) {
    if (kind === types.LINK && shouldOpenNewTab && suffixIcon) {
      return (
        <sc.LinkButtonIcon isDisabled={isDisabled} kind={types.LINK} isSuffixIcon>
          {suffixIcon}
        </sc.LinkButtonIcon>
      );
    }
    return null;
  }

  return (
    <sc.LinkButton
      aria-disabled={isDisabled}
      aria-label={a11yText}
      href={!isDisabled ? href : null}
      isDisabled={isDisabled}
      kind={kind}
      size={size}
      {...(shouldOpenNewTab ? shouldOpenNewTabProps : {})}
      {...moreProps}
      as={isDisabled ? "span" : "a"}
      ref={ref}
    >
      {icon ? <ButtonIcon isDisabled={isDisabled}>{icon}</ButtonIcon> : null}
      {children}
      {renderSuffix(props)}
    </sc.LinkButton>
  );
});

Link.types = {
  kind: constants.kind,
  size: constants.defaultSize,
};

const propTypes = {
  /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */
  a11yText: PropTypes.string,

  /** Body content of the button. */
  children: PropTypes.node.isRequired,

  /** Url for the link. */
  href: PropTypes.string.isRequired,

  /** An icon to be included to the left of children content. */
  icon: PropTypes.node,

  /** If the button is disabled. */
  isDisabled: PropTypes.bool,

  /** The visual style of the button. */
  kind: PropTypes.oneOf([
    Link.types.kind.DEFAULT,
    Link.types.kind.PRIMARY,
    Link.types.kind.SECONDARY,
    Link.types.kind.DESTRUCTIVE,
    Link.types.kind.FLAT,
    Link.types.kind.MINOR,
    Link.types.kind.LINK,
  ]),

  /** Size of the button (font size, min-height, padding, etc). */
  size: PropTypes.oneOf([Link.types.size.SMALL, Link.types.size.MEDIUM, Link.types.size.LARGE]),

  /** Whether the link should open a new tab. */
  shouldOpenNewTab: PropTypes.bool,

  /** Size of the button (font size, min-height, padding, etc). */
  suffixIcon: PropTypes.node,
};

const defaultProps = {
  a11yText: null,
  icon: null,
  isDisabled: false,
  kind: Link.types.kind.LINK,
  shouldOpenNewTab: false,
  size: Link.types.size.MEDIUM,
  suffixIcon: <NewTabIcon />,
};

Link.displayName = "Button.Link";
Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
