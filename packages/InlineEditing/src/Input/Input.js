import React from "react";
import PropTypes from "prop-types";
import Input from "@paprika/input";
import Editor from "../Editor";
import * as sc from "./Input.styles";

export default function InlineInput(props) {
  const {
    onClose,
    onStart,
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

  function handleBlur(event) {
    onClose();
    onSubmit(nextValue, { rowIndex, columnIndex, event });
    window.requestAnimationFrame(() => {
      refInputEditor.current.focus();
    });
  }

  function handleKeyUp(event) {
    if (event.key === "Escape") {
      onClose();
      setNextValue(value);
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
      const id = window.requestAnimationFrame(() => {
        refInputEditor.current.focus();
      });

      return () => {
        window.cancelAnimationFrame(id);
      };
    }
  }, [value]); // we want to run it only when the value change

  React.useEffect(() => {
    if (isEditing && refInput.current) {
      refInput.current.focus();
    }
  }, [isEditing]);

  return (
    <Editor
      onClick={() => {
        onStart();
      }}
      {...props}
      ref={refInputEditor}
    >
      <Editor.Edit>
        <sc.Container>
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
        </sc.Container>
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
  onStart: PropTypes.func,
  onSubmit: PropTypes.func,
  value: PropTypes.string,
};

const defaultProps = {
  isEditing: false,
  onChange: () => {},
  onClose: () => {},
  onStart: () => {},
  onSubmit: () => {},
  value: "",
};

InlineInput.propTypes = propTypes;
InlineInput.defaultProps = defaultProps;
