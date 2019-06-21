import React from "react";

export default function useBodyOverflow(disableBodyOverflow) {
  React.useEffect(() => {
    if (disableBodyOverflow) {
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "auto";
  }, [disableBodyOverflow]);
}
