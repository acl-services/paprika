import React from "react";

export default function useBodyOverflow(disableBodyOverflow, isOpen) {
  const originalOverflow = React.useRef(document.body.style.overflow);

  React.useLayoutEffect(() => {
    if (disableBodyOverflow) {
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [disableBodyOverflow, isOpen]);
}
