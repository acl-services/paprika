import React from "react";

export default function useMountedRef() {
  const mountedRef = React.useRef(false);

  React.useEffect(() => {
    mountedRef.current = true;
    return function cleanup() {
      mountedRef.current = false;
    };
  }, []);

  return mountedRef;
}
