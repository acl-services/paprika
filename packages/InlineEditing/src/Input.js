/* eslint-disable react/prop-types */
import React from "react";
import Input from "@paprika/input";
import Editor from "./Editor";

export default function InlineInput(props) {
  /** These props are only consumable by the Author no need to expose them */
  const { setIsEditing, rowIndex, columnIndex, onChange, isEditing, value, ...moreProps } = props;
  const refInput = React.useRef(null);
  const refSwitcher = React.useRef(null);

  const close = () => {
    setIsEditing(false);
  };

  function submit(event) {
    event.preventDefault();
    onChange({ rowIndex, columnIndex, close, nextValue: refInput.current.value });
  }

  React.useEffect(() => {
    if (isEditing) {
      setIsEditing(false);
      window.requestAnimationFrame(() => {
        refSwitcher.current.focus();
      });
    }
  }, [setIsEditing, value]);

  return (
    <Editor
      onEdit={() => {
        refInput.current.focus();
      }}
      onClick={() => {
        setIsEditing(true);
      }}
      {...props}
      ref={refSwitcher}
    >
      <Editor.Edit>
        <div style={{ position: "relative", height: "100%" }}>
          {isEditing ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                position: "absolute",
                right: "4px",
                color: "#AAA",
                zIndex: 3,
              }}
            >
              ↵
            </div>
          ) : null}
          <Input
            {...moreProps}
            ref={refInput}
            style={{ paddingRight: "24px" }}
            onBlur={() => {
              setIsEditing(false);
              window.requestAnimationFrame(() => {
                refSwitcher.current.focus();
              });
            }}
            onKeyUp={event => {
              if (event.key === "Escape") {
                setIsEditing(false);
                window.requestAnimationFrame(() => {
                  refSwitcher.current.focus();
                });
              }

              if (event.key === "Enter") {
                submit(event);
              }
            }}
            type="text"
            defaultValue={value}
          />
        </div>
      </Editor.Edit>
      <Editor.Value>
        <span>{value}</span>
      </Editor.Value>
    </Editor>
  );
}
