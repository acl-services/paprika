import React from "react";
import { string, node } from "prop-types";
import ListBox from "./ListBox";
import Option from "./components/Option";
import Group from "./components/Group";
import TagButton from "./components/TagButton";
import { TagStyled } from "./components/TagButton/Tag.styles";

import * as actionTypes from "./store/actionTypes";

const propTypes = {
  children: node.isRequired,
  placeholder: string, // eslint-disable-line
};

export default function ListBoxWithTags(props) {
  function renderLabel(state, dispatch, { getDOMAttributesForListBoxButton }) {
    const handleDeleteTag = key => event => {
      event.stopPropagation();
      dispatch({
        type: actionTypes.unselectOptions,
        payload: [key],
      });

      dispatch({
        type: actionTypes.unhideOptions,
        payload: [key],
      });
    };

    React.useEffect(() => {
      if (state.selectedOptions.length) {
        dispatch({
          type: actionTypes.hideOptions,
          payload: state.selectedOptions,
        });
      }
    }, [state.selectedOptions]);

    function Tags() {
      return state.selectedOptions
        .map(key => {
          if (state.selectedOptions.includes(state.options[key].index)) {
            const label = state.options[key].label;
            return (
              <TagStyled key={label} onRemove={handleDeleteTag(key)} isDisabled={state.isDisabled} label={label} />
            );
          }
          return null;
        })
        .map(tag => tag);
    }

    return (
      <TagButton state={state} dispatch={dispatch} getDOMAttributesForListBoxButton={getDOMAttributesForListBoxButton}>
        {state.selectedOptions.length ? <Tags /> : state.placeholder}
      </TagButton>
    );
  }

  return (
    <React.Fragment>
      <ListBox isPopoverOpen {...props} isMulti renderLabel={renderLabel}>
        {props.children}
      </ListBox>
    </React.Fragment>
  );
}

ListBoxWithTags.propTypes = propTypes;
ListBoxWithTags.Option = Option;
ListBoxWithTags.Group = Group;
