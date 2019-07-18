import React from "react";
import PropTypes from "prop-types";

class GuardSupervisor extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.guards = [];
    this.lastId = 0;
  }

  getChildContext() {
    return {
      registerGuard: this.registerGuard,
      canLeave: this.canLeave,
    };
  }

  componentDidMount() {
    window.addEventListener("beforeunload", this.handleWindowBeforeUnload, false);
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.handleWindowBeforeUnload, false);
  }

  /* eslint-disable no-param-reassign */
  handleWindowBeforeUnload = event => {
    if (this.hasDirtyConnectors()) {
      const message = this.props.alertMessage;

      event.returnValue = message;

      return message;
    }
  };
  /* eslint-enable no-param-reassign */

  hasDirtyConnectors = group => {
    const checkIsDirty = guard => guard.isDirty;

    if (!group) {
      return this.guards.some(checkIsDirty);
    }

    const checkIsInGroup = guard => (Array.isArray(group) ? group.indexOf(guard.group) >= 0 : guard.group === group);

    return this.guards.filter(checkIsInGroup).some(checkIsDirty);
  };

  registerGuard = (isDirtyInitial, group) => {
    const newId = this.generateId();

    const guard = {
      id: newId,
      isDirty: isDirtyInitial,
      group,
    };

    this.guards.push(guard);

    return {
      unregister: () => this.unregisterGuard(newId),
      updateStatus: isDirty => {
        guard.isDirty = isDirty;
      },
    };
  };

  unregisterGuard = id => {
    this.guards = this.guards.filter(guard => guard.id !== id);
  };

  canLeave = ({ alertMessage, group } = {}) => {
    if (this.hasDirtyConnectors(group)) {
      // eslint-disable-next-line no-restricted-globals, no-alert
      return confirm(alertMessage || this.props.alertMessage);
    }
    return true;
  };

  generateId = () => {
    this.lastId++;
    return this.lastId.toString();
  };

  render() {
    if (React.Children.count(this.props.children) > 1) {
      return <React.Fragment>{this.props.children}</React.Fragment>;
    }

    return this.props.children;
  }
}

GuardSupervisor.propTypes = {
  children: PropTypes.node,
  alertMessage: PropTypes.string,
};

GuardSupervisor.defaultProps = {
  children: null,
  alertMessage: null,
};

GuardSupervisor.childContextTypes = {
  registerGuard: PropTypes.func,
  canLeave: PropTypes.func,
};

export default GuardSupervisor;
