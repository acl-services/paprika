import React from "react";
import PropTypes from "prop-types";
import useListBox from "@paprika/listbox/useListBox";
import Tag from "../Tag";
import Filter from "../Filter";

const propTypes = {
  activeTag: PropTypes.number,
  hasCustomTags: PropTypes.bool.isRequired,
  setActiveTag: PropTypes.func.isRequired,
  onAddCustomTag: PropTypes.func.isRequired,
  renderTag: PropTypes.func,
};

const defaultProps = {
  activeTag: null,
  renderTag: null,
};

export default function Tags(props) {
  const [state, dispatch] = useListBox();

  const handleDeleteTag = key => () => {
    if (state.refFilterInput.current) {
      state.refFilterInput.current.focus();
    }

    dispatch({
      type: useListBox.types.unselectOptions,
      payload: [key],
    });
  };

  const tagsMap = state.selectedOptions.map(key => {
    const label = state.options[key].label;
    const id = state.options[key].id;
    const properties = {
      isTagActive: props.activeTag === Number.parseInt(key, 10),
      key: id,
      onRemove: handleDeleteTag(key),
      isDisabled: state.isDisabled,
      label,
    };

    if (props.renderTag) {
      const { index, isDisabled, isHidden, isSelected, label, value, content } = state.options[key];
      return props.renderTag({ index, isDisabled, isHidden, isSelected, label, value, content }, properties);
    }

    return <Tag {...properties} />;
  });

  return (
    <React.Fragment>
      {state.selectedOptions.length ? tagsMap : null}
      {props.hasCustomTags ? (
        <Filter
          onAddCustomTag={props.onAddCustomTag}
          setActiveTag={props.setActiveTag}
          placeholder={state.placeholder}
        />
      ) : null}
    </React.Fragment>
  );
}

Tags.propTypes = propTypes;
Tags.defaultProps = defaultProps;
