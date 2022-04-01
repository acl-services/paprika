import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import PanelContext from "../../PanelContext";
import * as sc from "./Header.styles";

const Header = React.forwardRef((props, ref) => {
  const size = React.useContext(PanelContext).size;
  const {
    children,
    getPushContentElement,
    hasAccent,
    hasCloseButton,
    isCloseButtonSemantic,
    onClose,
    ...moreProps
  } = props;

  return (
    <sc.Header
      data-pka-anchor="panel.header"
      hasPushedElement={!!getPushContentElement}
      hasAccent={hasAccent}
      size={size}
      ref={ref}
      {...moreProps}
    >
      {children}
      {hasCloseButton && (
        <Button.Close
          data-pka-anchor="panel.header.close"
          isSemantic={isCloseButtonSemantic}
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
  hasAccent: PropTypes.bool,
  hasCloseButton: PropTypes.bool,
  isCloseButtonSemantic: PropTypes.bool,
  isHeaderSticky: PropTypes.bool,
  onClose: PropTypes.func,
};

const defaultProps = {
  getPushContentElement: () => {},
  hasCloseButton: true,
  hasAccent: false,
  isCloseButtonSemantic: true,
  isHeaderSticky: false,
  onClose: () => {},
};

Header.displayName = "Panel.Header";
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
