import React from "react";

export default function useMountedRef() {
  const mountedRef = React.useRef(false);

  React.useLayoutEffect(() => {
    mountedRef.current = true;

    return function cleanupMountedRef() {
      mountedRef.current = false;
    };
  }, []);

  return mountedRef;
}
