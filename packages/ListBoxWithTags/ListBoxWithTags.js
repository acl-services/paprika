import React from "react";
import PropTypes from "prop-types";
import ListBox, { propTypes as listBoxPropTypes, defaultProps as listBoxdefaultProps } from "@paprika/listbox/ListBox";
import Option from "@paprika/listbox/components/Option";
import Group from "@paprika/listbox/components/Group";
import Provider from "@paprika/listbox/store/Provider";

import useListBox from "@paprika/listbox/store/useListBox";
import handleKeyboardKeys from "./helpers/handleKeyboardKeys";

// Custom Componeent for ListBoxWithTags
import Tags from "./components/Tags";
import Trigger from "./components/Trigger";

const propTypes = {
  ...listBoxPropTypes,
  hasCustomTags: PropTypes.bool,
  hideOptionOnSelected: PropTypes.bool,
  placeholderForTagInput: PropTypes.string,
  renderTag: PropTypes.func,
};

const defaultProps = {
  ...listBoxdefaultProps,
  hasCustomTags: false,
  hideOptionOnSelected: true,
  placeholderForTagInput: "New option ...",
  renderTag: null,
};

/* eslint-disable react/prop-types */
function ListBoxWithTags(props) {
  const [state, dispatch] = useListBox();
  const [activeTag, setActiveTag] = React.useState(null);

  const renderLabel = () => {
    return (
      <Trigger hasCustomTags={props.hasCustomTags}>
        <Tags
          activeTag={activeTag}
          hasCustomTags={props.hasCustomTags}
          placeholderForTagInput={props.placeholderForTagInput}
          setActiveTag={setActiveTag}
          onAddCustomTag={props.onAddCustomTag}
          renderTag={props.renderTag}
        />
        {!state.selectedOptions.length && !props.hasCustomTags ? state.placeholder : null}
      </Trigger>
    );
  };

  const handleKeyDown = handleKeyboardKeys({ state, dispatch, activeTag, setActiveTag });

  const { onAddCustomTag, ...moreProps } = props; // eslint
  return <ListBox onKeyDown={handleKeyDown} {...moreProps} renderLabel={renderLabel} isPopoverEager={false} />;
}
/* eslint-enable react/prop-types */

export default function ListBoxWithTagsWithProvider(props) {
  const [options, setOptions] = React.useState(props.children);

  const handleAddCustomTag = (state, value) => {
    const options = Object.keys(state.options).map(key => {
      const option = state.options[key];
      return React.cloneElement(option.content, {
        isHidden: option.isHidden,
        isSelected: state.selectedOptions.includes(Number.parseInt(key, 10)),
        isDisabled: option.isDisabled,
      });
    });

    const option = (
      <Option key={Object.keys(state.options).length} isSelected isHidden>
        {value}
      </Option>
    );

    setOptions([...options, option]);
  };

  return (
    <Provider
      {...props}
      hasFilter={props.hasCustomTags ? false : props.hasFilter || true}
      isMulti
      childrenListBoxOptions={options}
      preventOnBlurOnTrigger
    >
      <ListBoxWithTags {...props} onAddCustomTag={handleAddCustomTag}>
        {options}
      </ListBoxWithTags>
    </Provider>
  );
}

ListBoxWithTagsWithProvider.propTypes = propTypes;
ListBoxWithTagsWithProvider.defaultProps = defaultProps;
ListBoxWithTagsWithProvider.Option = Option;
ListBoxWithTagsWithProvider.Group = Group;
