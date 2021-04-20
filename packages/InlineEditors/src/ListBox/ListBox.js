import React from "react";
import PropTypes from "prop-types";
import ListBox from "@paprika/list-box";
import Editor from "../Editor";
import * as sc from "./ListBox.styles";
import { status } from "../types";

const isPopoverVisible = ({ rowIndex, columnIndex }) => {
  return (
    document
      .querySelector([`[data-paprika-anchor-inline-cell="${rowIndex}-${columnIndex}"]`])
      .parentElement.getAttribute("aria-hidden") === "true"
  );
};

export default function InlineListBox(props) {
  const {
    isEditing,
    onChange,
    onSubmit,
    onStart,
    onClose,
    value,
    renderValue,
    /** These props are only consumable by the Author no need to expose them */
    /* eslint-disable react/prop-types */
    status,
    placeHolder,
    rowIndex,
    columnIndex,
    children,
    getRefTable,
    /* eslint-enable react/prop-types */
    ...moreProps
  } = props;

  const refListBox = React.useRef(null);
  const refListBoxEditor = React.useRef(null);
  const [nextValue, setNextValue] = React.useState(null);

  function handleKeyUp(event) {
    if (event.key === "Escape") {
      setNextValue(null);
      onClose();
      window.requestAnimationFrame(() => {
        refListBoxEditor.current.focus();
      });
    }
  }

  function handleClose() {
    onClose();
    window.requestAnimationFrame(() => {
      if (refListBoxEditor.current) refListBoxEditor.current.focus();
    });
  }

  function handleBlur() {
    if (isPopoverVisible({ rowIndex, columnIndex })) {
      window.requestAnimationFrame(() => {
        handleClose();
      });
    }
  }

  function handleChange(...args) {
    setNextValue(args);
    onChange(...args);
  }

  function handleClick() {
    onStart();
  }

  // this effect force to close the input once the
  // value has change, that's why is not looking at the isEditing
  React.useEffect(() => {
    if (isEditing) {
      onClose();
      const id = window.requestAnimationFrame(() => {
        refListBoxEditor.current.focus();
      });
      return () => {
        window.cancelAnimationFrame(id);
      };
    }
  }, [value]);

  React.useEffect(() => {
    if (!isEditing && nextValue !== null) {
      onSubmit(...nextValue, { rowIndex, columnIndex });
    }
  }, [isEditing, nextValue, rowIndex, columnIndex]);

  React.useEffect(() => {
    if (isEditing && refListBox.current) {
      refListBox.current.focus();
    }
  }, [isEditing]);

  const dataIsEditing = {
    "data-paprika-anchor-inline-cell": `${rowIndex}-${columnIndex}`,
  };

  return (
    <Editor onClick={handleClick} isEditing={isEditing} ref={refListBoxEditor} status={status}>
      <Editor.Edit>
        <ListBox isOpen {...moreProps} onChange={handleChange} ref={refListBox}>
          <ListBox.Box {...dataIsEditing} />
          <ListBox.Trigger onKeyUp={handleKeyUp} onBlur={handleBlur} hasClearButton={false} />
          <ListBox.Popover onClose={handleClose} />
          {children}
        </ListBox>
      </Editor.Edit>
      <Editor.Value>
        <sc.ValueContainer>
          <sc.ValueContainerChild>
            <div>{typeof renderValue === "function" ? renderValue(value) : value || placeHolder} </div>
          </sc.ValueContainerChild>
        </sc.ValueContainer>
      </Editor.Value>
    </Editor>
  );
}

Object.keys(ListBox).forEach(key => {
  InlineListBox[key] = ListBox[key];
});

InlineListBox.propTypes = {
  isEditing: PropTypes.bool,
  onChange: PropTypes.func,
  onClose: PropTypes.func,
  onStart: PropTypes.func,
  onSubmit: PropTypes.func,
  renderValue: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
};

InlineListBox.defaultProps = {
  isEditing: false,
  onChange: () => {},
  onClose: () => {},
  onStart: () => {},
  onSubmit: () => {},
  renderValue: undefined,
  value: null,
};

InlineListBox.types = {
  status,
};
