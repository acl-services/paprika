import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  /** Callback triggered on ESC key press */
  on: PropTypes.func.isRequired,
};

const EscListener = ({ on, shouldStopEscapePropagation }) => {
  React.useEffect(() => {
    function handleEscKey(event) {
      if (event.key === "Escape") {
        if (shouldStopEscapePropagation) {
          event.stopPropagation();
        }

        on();
      }
    }

    document.addEventListener("keydown", handleEscKey, !!shouldStopEscapePropagation);

    return () => {
      document.removeEventListener("keydown", handleEscKey, !!shouldStopEscapePropagation);
    };
  }, [on]);

  return null;
};

EscListener.propTypes = propTypes;

export default EscListener;
