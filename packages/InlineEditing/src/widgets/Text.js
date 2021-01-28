/* eslint-disable react/prop-types */
import React from "react";
import PaprikaInput from "@paprika/input";
import RawButton from "@paprika/raw-button";

const Output = React.forwardRef((props, ref) => {
  const refRawButton = React.useRef();
  const { value, onEditing } = props;

  React.useImperativeHandle(ref, () => ({
    onFinished: () => {
      refRawButton.current.focus();
    },
    onCancel: () => {
      refRawButton.current.focus();
    },
  }));

  return (
    <RawButton ref={refRawButton} onClick={onEditing}>
      <span>{value}</span>
    </RawButton>
  );
});

const Input = props => {
  const refInput = React.useRef("");
  const { value, onChange, isEditing, onFinish, onCancel } = props;

  function handleKeyUp(event) {
    if (event.key === "Escape") {
      onCancel();
    }

    if (event.key === "Enter") {
      onChange({ nextValue: refInput.current.value, finish: onFinish });
    }
  }

  // this might be necessary if the consumer change their "value" by
  // a side-effect outside of the component and then set a new value.
  // otherwise this shouldn't be executed.

  React.useEffect(() => {
    if (value !== refInput.current.value) {
      refInput.current.value = value;
    }
  }, [value]);

  React.useLayoutEffect(() => {
    if (isEditing) {
      refInput.current.focus();
    }
  }, [isEditing]);

  return <PaprikaInput onKeyUp={handleKeyUp} ref={refInput} defaultValue={value} />;
};

export default {
  Output,
  Input,
};
