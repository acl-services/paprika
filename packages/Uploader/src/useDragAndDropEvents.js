import React from "react";

export default function useDragAndDropZoneEvents({ dropArea = () => document.body, handleChange, defaultIsDisabled }) {
  const [isDraggingOver, setisDraggingOver] = React.useState(defaultIsDisabled);
  const [isDragLeave, setIsDragLeave] = React.useState(defaultIsDisabled);

  React.useEffect(() => {
    function onDragOver(event) {
      setisDraggingOver(() => true);
      setIsDragLeave(() => false);
      // this prevent images from rendering on the browser
      event.preventDefault();
    }

    function onDragLeave() {
      setisDraggingOver(() => false);
      setIsDragLeave(() => true);
    }

    function onDrop(event) {
      // this prevent images from rendering on the browser
      setisDraggingOver(() => false);
      setIsDragLeave(() => true);
      event.preventDefault();
      handleChange(event);
    }

    const element = dropArea();
    if (element) {
      element.addEventListener("dragover", onDragOver, false);
      element.addEventListener("dragleave", onDragLeave, false);
      element.addEventListener("drop", onDrop, false);

      return function cleanup() {
        element.removeEventListener("dragover", onDragOver, false);
        element.removeEventListener("dragleave", onDragLeave, false);
        element.removeEventListener("drop", onDrop, false);
      };
    }
  }, [dropArea, handleChange]);

  return { isDraggingOver, isDragLeave };
}
