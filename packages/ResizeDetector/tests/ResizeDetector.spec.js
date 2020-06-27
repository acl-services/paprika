import React from "react";
import { render } from "@testing-library/react";
import ResizeDetector from "../src";

function getVals() {
  let returnVal;

  function ResizeConsumer() {
    const { width, height } = ResizeDetector.useObservedDimensions();
    const { size } = ResizeDetector.useBreakpoints();

    React.useLayoutEffect(() => {
      returnVal = { width, height, size };
    }, [width, height, size]);

    return null;
  }

  render(
    <div style={{ width: "100px", height: "100px" }}>
      <ResizeDetector>
        <ResizeConsumer />
      </ResizeDetector>
    </div>
  );

  return returnVal;
}

describe("ResizeDetector", () => {
  it("Renders with default props", () => {
    const { width, height, size } = getVals();

    expect(width).toBe(100);
    expect(height).toBe(100);
    expect(size).toBe("small");
  });
});
