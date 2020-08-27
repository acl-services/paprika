import React from "react";
import PropTypes from "prop-types";
import NewTabIcon from "@paprika/icon/lib/NewTab";
import * as constants from "@paprika/constants/lib/Constants";
import * as types from "./types";
import buttonStyles from "./Button.styles";
import * as sc from "./LinkButton.styles";

const propTypes = {
  a11yText: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  kind: PropTypes.oneOf([
    LinkButton.types.kind.DEFAULT, // eslint-disable-line no-use-before-define
    LinkButton.types.kind.SECONDARY, // eslint-disable-line no-use-before-define
    LinkButton.types.kind.DESTRUCTIVE, // eslint-disable-line no-use-before-define
    LinkButton.types.kind.FLAT, // eslint-disable-line no-use-before-define
    LinkButton.types.kind.MINOR, // eslint-disable-line no-use-before-define
    LinkButton.types.kind.LINK, // eslint-disable-line no-use-before-define
  ]),
  size: PropTypes.oneOf([LinkButton.types.size.SMALL, LinkButton.types.size.MEDIUM, LinkButton.types.size.LARGE]), // eslint-disable-line no-use-before-define
  shouldOpenNewTab: PropTypes.bool,
  suffixIcon: PropTypes.node,
};

const defaultProps = {
  a11yText: null,
  isDisabled: false,
  kind: types.LINK,
  shouldOpenNewTab: false,
  size: types.MEDIUM,
  suffixIcon: <NewTabIcon />,
};

const LinkButton = React.forwardRef((props, ref) => {
  const { a11yText, children, href, isDisabled, shouldOpenNewTab, kind, size, suffixIcon, ...moreProps } = props;

  const shouldOpenNewTabProps = {
    target: "_blank",
    rel: "noopener noreferrer",
  };

  const iconProps = {
    isDisabled,
    kind,
  };

  return (
    <a
      aria-label={a11yText}
      css={buttonStyles}
      href={!isDisabled ? href : null}
      isDisabled={isDisabled}
      kind={kind}
      size={size}
      {...(shouldOpenNewTab ? shouldOpenNewTabProps : {})}
      {...moreProps}
      as={isDisabled ? "span" : "a"}
      ref={ref}
    >
      {children}
      <sc.LinkButtonIcon {...iconProps} isSuffixIcon>
        {kind === types.LINK && shouldOpenNewTab && suffixIcon}
      </sc.LinkButtonIcon>
    </a>
  );
});

LinkButton.displayName = "LinkButton";
LinkButton.propTypes = propTypes;
LinkButton.defaultProps = defaultProps;
LinkButton.types = {
  kind: constants.kind,
  size: constants.defaultSize,
};

export default LinkButton;
