import React from "react";

export default function useEscapeKey(isOpen, onClose) {
  React.useEffect(() => {
    function handleEscKey(event) {
      if (event.key === "Escape") {
        if (isOpen && onClose) {
          onClose();
        }
      }
    }

    document.addEventListener("keydown", handleEscKey, false);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [onClose, isOpen]);
}
