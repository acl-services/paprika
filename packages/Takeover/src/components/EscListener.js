import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  /** Callback triggered on ESC key press */
  on: PropTypes.func.isRequired,
};

const EscListener = ({ on }) => {
  React.useEffect(() => {
    function handleEscKey(event) {
      if (event.key === "Escape") {
        on();
      }
    }

    document.addEventListener("keydown", handleEscKey, false);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [on]);

  return null;
};

EscListener.propTypes = propTypes;

export default EscListener;
