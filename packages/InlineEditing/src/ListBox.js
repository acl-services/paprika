import React from "react";
import PropTypes from "prop-types";
import ListBox from "@paprika/list-box";
import Editor from "./Editor";

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
    setIsEditing,
    /** These props are only consumable by the Author no need to expose them */
    /* eslint-disable react/prop-types */
    rowIndex,
    columnIndex,
    value,
    placeHolder,
    children,
    /* eslint-enable react/prop-types */
    ...moreProps
  } = props;

  const refInput = React.useRef(null);
  const refSwitcher = React.useRef(null);
  const [nextValue, setNextValue] = React.useState(null);

  function handleKeyUp(event) {
    if (event.key === "Escape") {
      setNextValue(null);
      setIsEditing(false);
      window.requestAnimationFrame(() => {
        refSwitcher.current.focus();
      });
    }
  }

  function handleClose() {
    setIsEditing(false);
    window.requestAnimationFrame(() => {
      if (refSwitcher.current) refSwitcher.current.focus();
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
    onChange(args);
  }

  React.useEffect(() => {
    if (isEditing) {
      setIsEditing(false);
      window.requestAnimationFrame(() => {
        refSwitcher.current.focus();
      });
    }
  }, [setIsEditing, value]);

  React.useEffect(() => {
    if (!isEditing && nextValue !== null) {
      onSubmit(...nextValue, { rowIndex, columnIndex });
    }
  }, [isEditing, nextValue, value, onChange]);

  const dataIsEditing = {
    "data-paprika-anchor-inline-cell": `${rowIndex}-${columnIndex}`,
  };

  return (
    <Editor
      onEdit={() => {
        if (isPopoverVisible({ rowIndex, columnIndex })) {
          window.requestAnimationFrame(() => {
            refInput.current.focus();
          });
        }
      }}
      {...props}
      ref={refSwitcher}
    >
      <Editor.Edit>
        <ListBox {...moreProps} onChange={handleChange} ref={refInput}>
          <ListBox.Box {...dataIsEditing} />
          <ListBox.Trigger onKeyUp={handleKeyUp} onBlur={handleBlur} hasClearButton={false} />
          <ListBox.Popover onClose={handleClose} />
          {children}
        </ListBox>
      </Editor.Edit>
      <Editor.Value>
        <div style={{ width: "100%", display: "inline-flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ flexBasis: "100%" }}>{value || placeHolder} </div>
          <div>▾</div>
        </div>
      </Editor.Value>
    </Editor>
  );
}

Object.keys(ListBox).forEach(key => {
  InlineListBox[key] = ListBox[key];
});

InlineListBox.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  setIsEditing: PropTypes.func,
  isEditing: PropTypes.bool,
};

InlineListBox.defaultProps = {
  onChange: () => {},
  onSubmit: () => {},
  setIsEditing: () => {},
  isEditing: false,
};
