import React from "react";

function isProperRef(ref) {
  return ref && Object.prototype.hasOwnProperty.call(ref, "current");
}

export default function useForwardDomRef(ref, parentRef) {
  React.useLayoutEffect(() => {
    if (typeof parentRef === "function") {
      parentRef(ref.current);
    } else if (isProperRef(parentRef)) {
      // eslint-disable-next-line no-param-reassign
      parentRef.current = ref.current;
    }
  }, [parentRef, ref]);

  return () => {
    if (typeof parentRef === "function") {
      parentRef(null);
    } else if (isProperRef(parentRef)) {
      // eslint-disable-next-line no-param-reassign
      parentRef.current = null;
    }
  };
}
