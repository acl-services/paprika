import React from "react";

export default function useDragAndDropZoneEvents({ dropArea = () => document.body, handleChange, defaultIsDisable }) {
  const [isDragOver, setIsDragOver] = React.useState(defaultIsDisable);
  const [isDragLeave, setIsDragLeave] = React.useState(defaultIsDisable);

  React.useEffect(() => {
    function onDragOver(event) {
      setIsDragOver(() => true);
      setIsDragLeave(() => false);
      // this prevent images from rendering on the browser
      event.preventDefault();
    }

    function onDragLeave() {
      setIsDragOver(() => false);
      setIsDragLeave(() => true);
    }

    function onDrop(event) {
      // this prevent images from rendering on the browser
      setIsDragOver(() => false);
      setIsDragLeave(() => true);
      event.preventDefault();
      handleChange(event);
    }

    const element = dropArea();
    element.addEventListener("dragover", onDragOver, false);
    element.addEventListener("dragleave", onDragLeave, false);
    element.addEventListener("drop", onDrop, false);

    return function cleanup() {
      element.removeEventListener("dragover", onDragOver, false);
      element.removeEventListener("dragleave", onDragLeave, false);
      element.removeEventListener("drop", onDrop, false);
    };
  }, [dropArea, handleChange]);

  return { isDragOver, isDragLeave };
}
