import React from "react";
import Resizer from "storybook/components/Resizer";
import Toast from "@paprika/toast";
import { ResizeConsumer } from "../storyHelpers";
import ResizeDetector from "../../src";

export function OnBreakStory() {
  const [showToast, setShowToast] = React.useState(false);
  const [size, setSize] = React.useState(false);
  const [key, setKey] = React.useState(0);

  function handleShowToast(_size) {
    setSize(_size);
    setShowToast(true);
    setKey(prevKey => prevKey + 1);
  }

  return (
    <>
      {showToast && (
        <Toast
          style={{ maxWidth: "200px" }}
          key={key}
          isFixed
          hasCloseButton={false}
          canAutoClose
          autoCloseDelay={1000}
        >
          <div style={{ textAlign: "center" }}>
            <strong>{size}</strong>
          </div>
        </Toast>
      )}

      <Resizer initWidth={360} initHeight={64} axis="x">
        <ResizeDetector onBreak={handleShowToast}>
          <ResizeConsumer />
        </ResizeDetector>
      </Resizer>
    </>
  );
}
