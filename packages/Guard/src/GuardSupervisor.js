import React from "react";
import PropTypes from "prop-types";

export const GuardRegistrationContext = React.createContext();
export const GuardGetekeeperContext = React.createContext();

export default function GuardSupervisor({ alertMessageDefault, children }) {
  const guards = React.useRef([]);
  const lastId = React.useRef(0);

  function hasDirtyConnectors(group) {
    const checkIsDirty = guard => guard.isDirty;

    if (!group) {
      return guards.current.some(checkIsDirty);
    }

    const checkIsInGroup = guard => (Array.isArray(group) ? group.indexOf(guard.group) >= 0 : guard.group === group);

    return guards.current.filter(checkIsInGroup).some(checkIsDirty);
  }

  React.useEffect(() => {
    function handleWindowBeforeUnload(event) {
      if (hasDirtyConnectors()) {
        const message = alertMessageDefault;

        // eslint-disable-next-line no-param-reassign
        event.returnValue = message;

        return message;
      }
    }

    window.addEventListener("beforeunload", handleWindowBeforeUnload, false);

    return function cleanup() {
      window.removeEventListener("beforeunload", handleWindowBeforeUnload, false);
    };
  }, [alertMessageDefault]);

  function generateId() {
    lastId.current++;
    return lastId.current.toString();
  }

  const registerGuardCallback = React.useCallback(group => {
    const newId = generateId();

    const guard = {
      id: newId,
      isDirty: false,
      group,
    };

    guards.current.push(guard);

    return {
      unregister: () => {
        guards.current = guards.current.filter(otherGuard => otherGuard.id !== newId);
      },
      updateStatus: isDirty => {
        guard.isDirty = isDirty;
      },
    };
  }, []);

  const canLeaveCallback = React.useCallback(
    ({ alertMessage, group } = {}) => {
      if (hasDirtyConnectors(group)) {
        // eslint-disable-next-line no-restricted-globals, no-alert
        return confirm(alertMessage || alertMessageDefault);
      }
      return true;
    },
    [alertMessageDefault]
  );

  return (
    <GuardRegistrationContext.Provider value={registerGuardCallback}>
      <GuardGetekeeperContext.Provider value={canLeaveCallback}>
        {React.Children.count(children) > 1 ? <React.Fragment>{children}</React.Fragment> : children}
      </GuardGetekeeperContext.Provider>
    </GuardRegistrationContext.Provider>
  );
}

GuardSupervisor.propTypes = {
  children: PropTypes.node,
  alertMessageDefault: PropTypes.string,
};

GuardSupervisor.defaultProps = {
  children: null,
  alertMessageDefault: null,
};
