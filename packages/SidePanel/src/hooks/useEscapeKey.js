import React from "react";

export default function useEscapeKey(isOpen, onClose, shouldStopEscapePropagation) {
  React.useEffect(() => {
    function handleEscKey(event) {
      if (event.key === "Escape") {
        if (isOpen && onClose) {
          if (shouldStopEscapePropagation) {
            event.stopPropagation();
          }

          console.log('close');
          onClose();
        }
      }
    }

    document.addEventListener("keydown", handleEscKey, !!shouldStopEscapePropagation);

    return () => {
      document.removeEventListener("keydown", handleEscKey, !!shouldStopEscapePropagation);
    };
  }, [onClose, isOpen]);
}
