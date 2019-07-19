import React from "react";
import PropTypes from "prop-types";
import { GuardGatekeeperContext } from "./GuardSupervisor";

export function useGatekeeper() {
  return React.useContext(GuardGetekeeperContext);
}

export default function GuardGatekeeper({ alertMessage, children, group }) {
  const canLeave = useGatekeeper();

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
