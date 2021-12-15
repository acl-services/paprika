import React from "react";
import PropTypes from "prop-types";
import { RefOf } from "@paprika/helpers";
import Button from "@paprika/button";
import Heading from "@paprika/heading";
import * as types from "../../types";
import * as sc from "./Header.styles";

const Header = React.forwardRef((props, ref) => {
  const {
    children,
    hasCloseButton,
    getPushContentElement,
    size,
    level,
    hasAccent,
    onClose,
    refHeading,
    ...moreProps
  } = props;

  return (
    <sc.Header
      data-pka-anchor="panel.header"
      hasPushedElement={!!getPushContentElement}
      size={size}
      hasAccent={hasAccent}
      ref={ref}
      {...moreProps}
    >
      <Heading level={level} ref={refHeading}>
        {children}
      </Heading>
      {hasCloseButton && (
        <Button.Close
          data-pka-anchor="panel.header.close"
          isSemantic={false}
          onClick={onClose}
          size={Button.types.size.MEDIUM}
        />
      )}
    </sc.Header>
  );
});

const propTypes = {
  children: PropTypes.node.isRequired,
  getPushContentElement: PropTypes.func,
  hasCloseButton: PropTypes.bool,
  isHeaderSticky: PropTypes.bool,
  hasAccent: PropTypes.bool,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  onClose: PropTypes.func,
  size: PropTypes.oneOf([types.sizes.MEDIUM, types.sizes.LARGE]),
  refHeading: RefOf(),
};

const defaultProps = {
  hasCloseButton: true,
  getPushContentElement: () => {},
  isHeaderSticky: false,
  level: 2,
  onClose: () => {},
  refHeading: null,
  size: types.sizes.MEDIUM,
  hasAccent: false,
};

Header.displayName = "Panel.Header";
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
