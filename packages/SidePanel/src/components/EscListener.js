import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  /** Callback triggered on ESC key down */
  onEscKeydown: PropTypes.func.isRequired,
};

function EscListener({ onEscKeydown }) {
  React.useEffect(() => {
    function handleEscKey(event) {
      if (event.key === "Escape") {
        onEscKeydown();
      }
    }

    document.addEventListener("keydown", handleEscKey, false);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [onEscKeydown]);

  return null;
}

EscListener.propTypes = propTypes;

export default EscListener;
