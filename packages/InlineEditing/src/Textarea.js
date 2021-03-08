import React from "react";
import PropTypes from "prop-types";
import Textarea from "@paprika/textarea";
import CollapsibleText from "@paprika/collapsible-text";
import Editor from "./Editor";

export default function InlineTextarea(props) {
  const {
    onEditing,
    onChange,
    onSubmit,
    onClose,
    /* eslint-disable react/prop-types */
    rowIndex,
    columnIndex,
    isEditing,
    value,
    collapsedLength,
    /* eslint-enable react/prop-types */
    ...moreProps
  } = props;

  const refTextAreaEditor = React.useRef(null);
  const refTextarea = React.useRef(null);

  // our textarea can't be uncontrolled quite sad :(
  const [nextValue, setNextValue] = React.useState(value);

  function handleChange(event) {
    const next = event.target.value;
    setNextValue(next);
    onChange(next, { rowIndex, columnIndex });
  }

  function handleBlur() {
    onClose();
    window.requestAnimationFrame(() => {
      refTextAreaEditor.current.focus();
    });
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      if (event.shiftKey) {
        return;
      }
      event.preventDefault();
    }

    if (event.key === "Escape") {
      onClose();
      window.requestAnimationFrame(() => {
        refTextAreaEditor.current.focus();
      });
    }
  }

  function handleKeyUp(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      onSubmit(nextValue, { rowIndex, columnIndex });
      // hacking and waiting for react to update the dom
      // and then focus on the element :/
      // can't figure it out a better way without using a useEffect
      // or require action from the consumer
      setTimeout(() => {
        refTextAreaEditor.current.focus();
      }, 0);
    }
  }

  function handleClick() {
    onEditing();
  }

  React.useEffect(() => {
    if (isEditing) {
      onClose();
      window.requestAnimationFrame(() => {
        refTextAreaEditor.current.focus();
      });
    }
  }, [value]);

  React.useEffect(() => {
    if (isEditing) {
      refTextarea.current.focus();
    }
  }, [isEditing]);

  return (
    <Editor isEditing={isEditing} onClick={handleClick} ref={refTextAreaEditor}>
      <Editor.Edit>
        <Textarea
          {...moreProps}
          ref={refTextarea}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onChange={handleChange}
          type="text"
          value={nextValue}
        />
      </Editor.Edit>
      <Editor.Value>
        {typeof collapsedLength !== "undefined" ? (
          <CollapsibleText collapsedLength={collapsedLength} a11yText="cardigans">
            <p>{value}</p>
          </CollapsibleText>
        ) : (
          <p style={{ whiteSpace: "pre-wrap", padding: "4px" }}>{value}</p>
        )}
      </Editor.Value>
    </Editor>
  );
}

InlineTextarea.propTypes = {
  collapsedLength: PropTypes.number,
  onChange: PropTypes.func,
  onClose: PropTypes.func,
  onEditing: PropTypes.func,
  onSubmit: PropTypes.func,
};

InlineTextarea.defaultProps = {
  collapsedLength: undefined,
  onChange: () => {},
  onClose: () => {},
  onEditing: () => {},
  onSubmit: () => {},
};
