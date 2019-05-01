import React from "react";
import PropTypes from "prop-types";
import ListBox, {
  propTypes as listBoxPropTypes,
  defaultProps as listBoxdefaultProps,
} from "@paprika/listbox/lib/ListBox";
import Option from "@paprika/listbox/lib/components/Option";
import Footer from "@paprika/listbox/lib/components/Footer";
import Group from "@paprika/listbox/lib/components/Group";
import Provider from "@paprika/listbox/lib/store/Provider";

import useListBox from "@paprika/listbox/lib/useListBox";
import handleKeyboardKeys from "./helpers/handleKeyboardKeys";

// Custom Componeent for ListBoxWithTags
import Tags from "./components/Tags";
import Trigger from "./components/Trigger";

const propTypes = {
  ...listBoxPropTypes,
  hasCustomTags: PropTypes.bool,
  allowCustomTagDuplication: PropTypes.bool,
  hideOptionOnSelected: PropTypes.bool,
  placeholderForTagInput: PropTypes.string,
  renderTag: PropTypes.func,
};

const defaultProps = {
  ...listBoxdefaultProps,
  hasCustomTags: false,
  allowsCustomTagDuplication: false,
  hideOptionOnSelected: true,
  placeholderForTagInput: "New option ...",
  renderTag: null,
};

/* eslint-disable react/prop-types */
function ListBoxWithTags(props) {
  const [state, dispatch] = useListBox();
  const [activeTag, setActiveTag] = React.useState(null);

  const renderTrigger = () => {
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
  return <ListBox onKeyDown={handleKeyDown} {...moreProps} renderTrigger={renderTrigger} isPopoverEager={false} />;
}
/* eslint-enable react/prop-types */

export default function ListBoxWithTagsWithProvider(props) {
  const [options, setOptions] = React.useState(props.children);

  const setStateOptions = (state, value) => {
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

  const hasDuplication = (state, value) =>
    Object.keys(state.options).some(key => {
      const option = state.options[key];
      const text = typeof option.content === "string" ? option.content : option.label;

      return text === value;
    });

  const handleAddCustomTag = (state, value) => {
    if (props.allowsCustomTagDuplication) {
      setStateOptions(state, value);
      return;
    }

    if (hasDuplication(state, value)) {
      return;
    }

    setStateOptions(state, value);
  };

  return (
    <Provider
      {...props}
      hasFilter={props.hasCustomTags ? false : props.hasFilter || true}
      isMulti
      childrenOptions={options}
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
ListBoxWithTagsWithProvider.Footer = Footer;
