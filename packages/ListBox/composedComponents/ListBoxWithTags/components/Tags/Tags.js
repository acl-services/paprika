import React from "react";
import PropTypes from "prop-types";
import Tag from "../Tag";
import Filter from "../Filter";
import useStore from "../../../../store/useStore";
import * as actionTypes from "../../../../store/actionTypes";

const propTypes = {
  activeTag: PropTypes.number,
  hasCustomTags: PropTypes.bool.isRequired,
};

const defaultProps = {
  activeTag: null,
};

export default function Tags(props) {
  const [state, dispatch] = useStore();

  const handleDeleteTag = key => event => {
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
      />
    );
  });

  return (
    <React.Fragment>
      {tagsMap}
      {props.hasCustomTags ? <Filter placeholder={state.placeholder} /> : null}
    </React.Fragment>
  );
}

Tags.propTypes = propTypes;
Tags.defaultProps = defaultProps;
