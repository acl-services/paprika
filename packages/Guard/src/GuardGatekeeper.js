import React from "react";
import PropTypes from "prop-types";
import { GuardGatekeeperContext } from "./GuardSupervisor";

const propTypes = {
  children: PropTypes.func,
  alertMessage: PropTypes.string,
  group: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};

const defaultProps = {
  alertMessage: "",
  children: null,
  group: null,
};

export function useGuard() {
  return React.useContext(GuardGatekeeperContext);
}

export default function GuardGatekeeper({ alertMessage, children, group }) {
  const canLeave = useGuard();

  if (!children) {
    return null;
  }

  return children(() =>
    canLeave({
      alertMessage,
      group,
    })
  );
}

GuardGatekeeper.displayName = "GuardGatekeeper";
GuardGatekeeper.propTypes = propTypes;
GuardGatekeeper.defaultProps = defaultProps;
