import React from "react";
import PropTypes from "prop-types";
import Input from "@paprika/input";
import Editor from "./Editor";

export default function InlineInput(props) {
  const {
    onClose,
    onEditing,
    isEditing,
    onChange,
    onSubmit,
    value,

    /* eslint-disable react/prop-types */
    rowIndex,
    columnIndex,
    /* eslint-enable react/prop-types */
    ...moreProps
  } = props;
  const refInput = React.useRef(null);
  const refInputEditor = React.useRef(null);
  const [nextValue, setNextValue] = React.useState(value);

  function handleBlur() {
    onClose();
    window.requestAnimationFrame(() => {
      refInputEditor.current.focus();
    });
  }

  function handleKeyUp(event) {
    if (event.key === "Escape") {
      onClose();
      window.requestAnimationFrame(() => {
        refInputEditor.current.focus();
      });
      setNextValue(value);
    }

    if (event.key === "Enter") {
      onSubmit(nextValue, { rowIndex, columnIndex, event });
      // hacking and waiting for react to update the dom
      // and then focus on the element :/
      // can't figure it out a better way without using a useEffect
      // or require action from the consumer
      setTimeout(() => {
        refInputEditor.current.focus();
      }, 0);
    }
  }

  function handleChange(event) {
    const next = event.target.value;
    onChange(next, { rowIndex, columnIndex, event });
    setNextValue(next);
  }

  React.useEffect(() => {
    if (isEditing) {
      onClose();
      window.requestAnimationFrame(() => {
        refInputEditor.current.focus();
      });
    }
  }, [value]);

  React.useEffect(() => {
    if (isEditing) {
      refInput.current.focus();
    }
  }, [isEditing]);

  return (
    <Editor
      onClick={() => {
        onEditing();
      }}
      {...props}
      ref={refInputEditor}
    >
      <Editor.Edit>
        <div style={{ position: "relative", height: "100%" }}>
          <Input
            {...moreProps}
            ref={refInput}
            style={{ paddingRight: "24px" }}
            onBlur={handleBlur}
            onKeyUp={handleKeyUp}
            onChange={handleChange}
            type="text"
            value={nextValue}
          />
        </div>
      </Editor.Edit>
      <Editor.Value>
        <span>{value}</span>
      </Editor.Value>
    </Editor>
  );
}

const propTypes = {
  isEditing: PropTypes.bool,
  onChange: PropTypes.func,
  onClose: PropTypes.func,
  onEditing: PropTypes.func,
  onSubmit: PropTypes.func,
  value: PropTypes.string,
};

const defaultProps = {
  isEditing: false,
  onChange: () => {},
  onClose: () => {},
  onEditing: () => {},
  onSubmit: () => {},
  value: "",
};

InlineInput.propTypes = propTypes;
InlineInput.defaultProps = defaultProps;
