import React from "react";
import PropTypes from "prop-types";

export const GuardRegistrationContext = React.createContext();
export const GuardGatekeeperContext = React.createContext();

const propTypes = {
  children: PropTypes.node,
  alertMessageDefault: PropTypes.string,
};

const defaultProps = {
  children: null,
  alertMessageDefault: null,
};

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
        // SEE: https://developer.mozilla.org/en-US/docs/Web/API/Event/returnValue
        // SEE: https://stackoverflow.com/questions/38879742/is-it-possible-to-display-a-custom-message-in-the-beforeunload-popup
        event.preventDefault();
        // eslint-disable-next-line no-param-reassign
        event.returnValue = "";
      }
    }

    window.addEventListener("beforeunload", handleWindowBeforeUnload, false);

    return function cleanup() {
      window.removeEventListener("beforeunload", handleWindowBeforeUnload, false);
    };
  }, []);

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
      <GuardGatekeeperContext.Provider value={canLeaveCallback}>
        {React.Children.count(children) > 1 ? <React.Fragment>{children}</React.Fragment> : children}
      </GuardGatekeeperContext.Provider>
    </GuardRegistrationContext.Provider>
  );
}

GuardSupervisor.displayName = "GuardSupervisor";
GuardSupervisor.propTypes = propTypes;
GuardSupervisor.defaultProps = defaultProps;
