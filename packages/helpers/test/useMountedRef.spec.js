import { renderHook } from "@testing-library/react-hooks";

import useMountedRef from "../src/hooks/useMountedRef";

describe("useMountedRef", () => {
  test("should return a reference with a bool showing is the component is mounted", () => {
    const {
      result: { current: mountedRef },
      rerender,
      unmount,
    } = renderHook(() => {
      const ref = useMountedRef();
      // Check initial state
      expect(ref.current).toBe(false);
      return ref;
    });

    // After render
    expect(mountedRef.current).toBe(true);

    rerender();
    // After re-render
    expect(mountedRef.current).toBe(true);

    unmount();
    // After after unmount
    expect(mountedRef.current).toBe(false);
  });
});
