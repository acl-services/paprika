import React from "react";

export default function useEscapeKey(isOpen, onClose) {
  React.useEffect(() => {
    function handleEscKey(event) {
      if (event.key === "Escape") {
        if (isOpen && onClose) {
          event.stopPropagation();

          onClose();
        }
      }
    }

    document.addEventListener("keydown", handleEscKey, true);

    return () => {
      document.removeEventListener("keydown", handleEscKey, true);
    };
  }, [onClose, isOpen]);
}
