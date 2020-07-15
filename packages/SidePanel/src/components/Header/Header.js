import React from "react";
import PropTypes from "prop-types";
import { RefOf, ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import Button from "@paprika/button";
import Heading from "@paprika/heading";
import * as sc from "./Header.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  getPushContentElement: PropTypes.func,
  hasCloseButton: PropTypes.bool,
  isCompact: PropTypes.bool,
  kind: PropTypes.oneOf([Button.Kinds.DEFAULT, Button.Kinds.PRIMARY]),
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  onClose: PropTypes.func,
  refHeading: RefOf(),
};

const defaultProps = {
  hasCloseButton: true,
  getPushContentElement: () => {},
  kind: Button.Kinds.DEFAULT,
  level: 2,
  isCompact: false,
  onClose: () => {},
  refHeading: null,
};

const Header = React.forwardRef((props, ref) => {
  const {
    children,
    hasCloseButton,
    getPushContentElement,
    isCompact,
    kind,
    level,
    onClose,
    refHeading,
    ...moreProps
  } = props;

  return (
    <sc.Header
      data-pka-anchor="sidepanel.header"
      hasPushedElement={!!getPushContentElement}
      isCompact={isCompact}
      kind={kind}
      ref={ref}
      {...moreProps}
    >
      <Heading level={level} displayLevel={isCompact ? 4 : 3} ref={refHeading}>
        {children}
      </Heading>
      {hasCloseButton && (
        <Button.Close
          data-pka-anchor="sidepanel.header.close"
          isSemantic={false}
          onClick={onClose}
          size={isCompact ? ShirtSizes.SMALL : ShirtSizes.MEDIUM}
          isDark={kind === Button.Kinds.PRIMARY}
        />
      )}
    </sc.Header>
  );
});

Header.displayName = "SidePanel.Header";
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
