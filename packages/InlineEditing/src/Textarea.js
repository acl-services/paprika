import React from "react";
import PropTypes from "prop-types";
import Textarea from "@paprika/textarea";
import CollapsibleText from "@paprika/collapsible-text";
import Editor from "./Editor";

export default function InlineTextarea(props) {
  // eslint-disable-next-line react/prop-types
  const { setIsEditing, rowIndex, columnIndex, onChange, isEditing, value, collapsedLength, ...moreProps } = props;
  const refTextarea = React.useRef(null);
  const refSwitcher = React.useRef(null);

  const close = () => {
    setIsEditing(false);
  };

  function submit(event) {
    event.preventDefault();
    onChange({ rowIndex, columnIndex, close, nextValue: refTextarea.current.value });
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
        refTextarea.current.focus();
      }}
      {...props}
      ref={refSwitcher}
    >
      <Editor.Edit>
        <Textarea
          {...moreProps}
          ref={refTextarea}
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
      </Editor.Edit>
      <Editor.Value>
        {typeof collapsedLength !== "undefined" ? (
          <CollapsibleText collapsedLength={collapsedLength} a11yText="cardigans">
            <p>{value}</p>
          </CollapsibleText>
        ) : (
          <p>{value}</p>
        )}
      </Editor.Value>
    </Editor>
  );
}

InlineTextarea.propTypes = {
  collapsedLength: PropTypes.number,
};

InlineTextarea.defaultProps = {
  collapsedLength: undefined,
};
