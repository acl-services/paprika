import React from "react";
import PropTypes from "prop-types";
import { GuardRegistrationContext } from "./GuardSupervisor";

function GuardConnector({ group, isDirty }) {
  const registerGuard = React.useContext(GuardRegistrationContext);
  const updateConnectorStatus = React.useRef(null);

  React.useEffect(() => {
    const { unregister, updateStatus } = registerGuard(group);

    updateConnectorStatus.current = updateStatus;

    return function cleanup() {
      updateConnectorStatus.current = null;
      unregister();
    };
  }, [group, registerGuard]);

  React.useEffect(() => {
    if (updateConnectorStatus.current) {
      updateConnectorStatus.current(isDirty);
    }
  }, [isDirty]);

  return null;
}

GuardConnector.propTypes = {
  isDirty: PropTypes.bool,
  group: PropTypes.string,
};

GuardConnector.defaultProps = {
  isDirty: false,
  group: null,
};

export default GuardConnector;
