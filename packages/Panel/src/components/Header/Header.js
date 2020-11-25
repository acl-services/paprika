import React from "react";
import PropTypes from "prop-types";
import { RefOf } from "@paprika/helpers/lib/customPropTypes";
import Button from "@paprika/button";
import Heading from "@paprika/heading";
import * as types from "../../types";
import * as sc from "./Header.styles";

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
      data-pka-anchor="panel.header"
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
          data-pka-anchor="panel.header.close"
          isSemantic={false}
          onClick={onClose}
          size={isCompact ? types.SMALL : types.MEDIUM}
          isDark={kind === types.kinds.PRIMARY}
        />
      )}
    </sc.Header>
  );
});

Header.types = {
  kind: types.kinds,
};

const propTypes = {
  children: PropTypes.node.isRequired,
  getPushContentElement: PropTypes.func,
  hasCloseButton: PropTypes.bool,
  isCompact: PropTypes.bool,
  isHeaderSticky: PropTypes.bool,
  kind: PropTypes.oneOf([Header.types.kind.DEFAULT, Header.types.kind.PRIMARY]),
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  onClose: PropTypes.func,
  refHeading: RefOf(),
};

const defaultProps = {
  hasCloseButton: true,
  getPushContentElement: () => {},
  kind: Header.types.kind.DEFAULT,
  isHeaderSticky: false,
  level: 2,
  isCompact: false,
  onClose: () => {},
  refHeading: null,
};

Header.displayName = "Panel.Header";
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
