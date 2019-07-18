import React from "react";
import PropTypes from "prop-types";
import modalBodyStyles from "./Body.styles";

const propTypes = {
  /** Custom classes for the Modal Body element. */
  className: PropTypes.string,

  /** Content for the Modal Body. */
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  className: "",
};

class Body extends React.Component {
  render() {
    const { className, children } = this.props;
    return (
      <div className={className} css={modalBodyStyles}>
        {children}
      </div>
    );
  }
}

Body.displayName = "ModalBody";
Body.propTypes = propTypes;
Body.defaultProps = defaultProps;

export default Body;
