import React from "react";
import PropTypes from "prop-types";
import Tag from "../Tag";
import useStore from "../../../../store/useStore";
import * as actionTypes from "../../../../store/actionTypes";

const propTypes = { activeTag: PropTypes.number.isRequired };

export default function Tags(props) {
  const [state, dispatch] = useStore();

  const handleDeleteTag = key => event => {
    event.stopPropagation();
    dispatch({
      type: actionTypes.unselectOptions,
      payload: [key],
    });
  };

  return state.selectedOptions
    .map(key => {
      if (state.selectedOptions.includes(state.options[key].index)) {
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
      }
      return null;
    })
    .map(tag => tag);
}

Tags.propTypes = propTypes;
