import React from "react";

function isProperRef(ref) {
  return ref && Object.prototype.hasOwnProperty.call(ref, "current");
}

export function useForwardAnyRef(ref, parentRef) {
  React.useEffect(() => {
    if (typeof parentRef === "function") {
      parentRef(ref.current);
    } else if (isProperRef(parentRef)) {
      // eslint-disable-next-line no-param-reassign
      parentRef.current = ref.current;
    }
  }, [ref.current]);

  return ref;
}
