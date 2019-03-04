import React from "react";
import PropTypes from "prop-types";
import Tag from "../Tag";
import TagInput from "../TagInput";
import useStore from "../../../../store/useStore";
import * as actionTypes from "../../../../store/actionTypes";

const propTypes = {
  activeTag: PropTypes.number,
  hasTagInput: PropTypes.bool.isRequired,
  placeholderForTagInput: PropTypes.string.isRequired,
  refTagInput: PropTypes.object.isRequired, // eslint-disable-line
};

const defaultProps = {
  activeTag: null,
};

export default function Tags(props) {
  const [state, dispatch] = useStore();

  const handleDeleteTag = key => event => {
    event.stopPropagation();
    dispatch({
      type: actionTypes.unselectOptions,
      payload: [key],
    });
  };

  const tagsMap = state.selectedOptions.map(key => {
    const label = state.options[key].label;

    return (
      <Tag
        isTagActive={props.activeTag === Number.parseInt(key, 10)}
        key={label}
        onRemove={handleDeleteTag(key)}
        isDisabled={state.isDisabled}
        label={label}
        tabIndexRemoveButton={-1}
      />
    );
  });

  return (
    <React.Fragment>
      {tagsMap}
      {props.hasTagInput ? <TagInput placeholder={props.placeholderForTagInput} ref={props.refTagInput} /> : null}
    </React.Fragment>
  );
}

Tags.propTypes = propTypes;
Tags.defaultProps = defaultProps;
