import React from "react";
import PropTypes from "prop-types";

class GuardConnector extends React.Component {
  componentWillMount() {
    this.registerSelf();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isDirty !== this.props.isDirty) {
      this.updateStatus(this.props.isDirty);
    }

    if (prevProps.group !== this.props.group) {
      this.unregister();
      this.registerSelf();
    }
  }

  componentWillUnmount() {
    if (this.unregister) {
      this.unregister();
    }
  }

  registerSelf = () => {
    const { unregister, updateStatus } = this.context.registerGuard(this.props.isDirty, this.props.group);

    this.unregister = unregister;
    this.updateStatus = updateStatus;
  };

  render() {
    return null;
  }
}

GuardConnector.propTypes = {
  isDirty: PropTypes.bool,
  group: PropTypes.string,
};

GuardConnector.defaultProps = {
  isDirty: false,
  group: null,
};

GuardConnector.contextTypes = {
  registerGuard: PropTypes.func,
};

export default GuardConnector;
