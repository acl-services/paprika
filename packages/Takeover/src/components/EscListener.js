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
        event.stopPropagation();

        on();
      }
    }

    document.addEventListener("keydown", handleEscKey, true);

    return () => {
      document.removeEventListener("keydown", handleEscKey, true);
    };
  }, [on]);

  return null;
};

EscListener.propTypes = propTypes;

export default EscListener;
