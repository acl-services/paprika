import React from "react";
import PropTypes from "prop-types";
import { modalFooterStyles, contentStyles, actionsStyles }  from "./Footer.styles";

const propTypes = {
  /** Custom classes for the Modal Footer element. */
  className: PropTypes.string,

  /** Content for the Modal Footer. */
  children: PropTypes.node,

  /** Content for right column where action buttons are normally shown. */
  footerActions: PropTypes.node,
};

const defaultProps = {
  className: "",
  children: null,
  footerActions: null,
};

class Footer extends React.Component {
  render() {
    const { className, children, footerActions } = this.props;
    return (
      <footer className={className} css={modalFooterStyles}>
        <div css={contentStyles}>{children}</div>
        <div css={actionsStyles}>{footerActions}</div>
      </footer>
    );
  }
}

Footer.displayName = "ModalFooter";
Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
