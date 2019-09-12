import React from "react";

const noop = () => {};

export default function useDragAndDropZoneEvents({
  dropArea = () => document.body,
  onDragEnter = noop,
  onDragOver = noop,
  onDragLeave = noop,
  onDrop = noop,
}) {
  React.useEffect(() => {
    const element = dropArea();
    element.addEventListener("dragenter", onDragEnter, false);
    element.addEventListener("dragover", onDragOver, false);
    element.addEventListener("dragleave", onDragLeave, false);
    element.addEventListener("drop", onDrop, false);

    return function cleanup() {
      console.log("🛀 clean up", element);
      element.removeEventListener("dragenter", onDragEnter, false);
      element.removeEventListener("dragover", onDragOver, false);
      element.removeEventListener("drop", onDrop, false);
    };
  }, [dropArea, onDragEnter, onDragLeave, onDragOver, onDrop]);
}
