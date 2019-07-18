import React from "react";
import PropTypes from "prop-types";

export default class GuardGatekeeper extends React.Component {
  render() {
    return this.props.children(() =>
      this.context.canLeave({
        alertMessage: this.props.alertMessage,
        group: this.props.group,
      })
    );
  }
}

GuardGatekeeper.propTypes = {
  children: PropTypes.func,
  alertMessage: PropTypes.string,
  group: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};

GuardGatekeeper.defaultProps = {
  alertMessage: "",
  children: null,
  group: null,
};

GuardGatekeeper.contextTypes = {
  canLeave: PropTypes.func,
};
