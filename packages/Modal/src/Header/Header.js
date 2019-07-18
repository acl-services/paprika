import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import { closeButtonStyle, headerStyles, headingStyle } from "./Header.styles";

const propTypes = {
  /** Defines the hierarchical level of an element within a structure. */
  headerAriaLevel: PropTypes.number,

  /** Custom classes for the Modal Header element. */
  className: PropTypes.string,

  /** Content for the Modal Header. */
  children: PropTypes.node.isRequired,

  /** If the Modal Header should include a Close button (top right). */
  hasCloseButton: PropTypes.bool,

  /** If the Modal Header style is dark with light text. */
  isDark: PropTypes.bool,

  /** Function to call when Close button is clicked. */
  onClose: PropTypes.func,
};

const defaultProps = {
  headerAriaLevel: 2,
  className: "",
  hasCloseButton: false,
  isDark: false,
  onClose: () => {},
};

class Header extends React.Component {
  renderCloseButton() {
    if (!this.props.hasCloseButton) return null;
    return (
      <Button
        isCloseButton
        size="small"
        isDark={this.props.isDark}
        cssOverrides={closeButtonStyle}
        onClick={this.props.onClose}
      >
        X
      </Button>
    );
  }

  render() {
    const { headerAriaLevel, className, children, isDark } = this.props;
    return (
      <header className={className} css={headerStyles} isDark={isDark}>
        {this.renderCloseButton()}
        <div css={headingStyle} isDark={isDark} role="heading" aria-level={headerAriaLevel}>
          {children}
        </div>
      </header>
    );
  }
}

Header.displayName = "ModalHeader";
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
