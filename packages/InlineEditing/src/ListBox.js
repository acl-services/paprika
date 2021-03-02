/* eslint-disable react/prop-types */
import React from "react";
import ListBox from "@paprika/list-box";
import Editor from "./Editor";

export default function InlineListBox(props) {
  /** These props are only consumable by the Author no need to expose them */
  const {
    setIsEditing,
    rowIndex,
    columnIndex,
    onChange,
    isEditing,
    value,
    placeHolder,
    children,
    ...moreProps
  } = props;
  const refInput = React.useRef(null);
  const refSwitcher = React.useRef(null);

  const close = () => {
    setIsEditing(false);
  };

  function handleKeyUp(event) {
    if (event.key === "Escape") {
      setIsEditing(false);
      window.requestAnimationFrame(() => {
        refSwitcher.current.focus();
      });
    }

    // if (event.key === "Enter") {
    //   submit(event);
    // }
  }

  function handleClose() {
    setIsEditing(false);
    window.requestAnimationFrame(() => {
      refSwitcher.current.focus();
    });
  }

  function handleBlur() {
    const $parent = document.querySelector([`[data-paprika-anchor-inline-cell="${rowIndex}-${columnIndex}"]`])
      .parentElement;

    if ($parent.getAttribute("aria-hidden") === "true") {
      window.requestAnimationFrame(() => {
        handleClose();
      });
    }
  }

  function submit(event) {
    event.preventDefault();
    onChange({ rowIndex, columnIndex, close, nextValue: refInput.current.value });
  }

  function handleChange(args) {
    console.log("change", args);
    // handleClose();
  }

  function handleAccept(args) {
    console.log("accept", args);
  }

  React.useEffect(() => {
    if (isEditing) {
      setIsEditing(false);
      window.requestAnimationFrame(() => {
        refSwitcher.current.focus();
      });
    }
  }, [setIsEditing, value]);

  const dataIsEditing = {
    "data-paprika-anchor-inline-cell": `${rowIndex}-${columnIndex}`,
  };

  return (
    <Editor
      onEdit={() => {
        refInput.current.focus();
      }}
      {...props}
      ref={refSwitcher}
    >
      <Editor.Edit>
        <ListBox {...moreProps} onChange={handleChange} ref={refInput}>
          <ListBox.Box {...dataIsEditing} />
          <ListBox.Trigger onKeyUp={handleKeyUp} onBlur={handleBlur} />
          <ListBox.Popover onClose={handleClose} />
          <ListBox.Footer isClearVisible={false} onClickAccept={handleAccept} onClickCancel={handleClose} />
          {children}
        </ListBox>
      </Editor.Edit>
      <Editor.Value>
        <span>{placeHolder}</span>
      </Editor.Value>
    </Editor>
  );
}

Object.keys(ListBox).forEach(key => {
  InlineListBox[key] = ListBox[key];
});
