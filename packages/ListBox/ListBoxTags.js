import React, { useState, useEffect } from "react";
import { string, node } from "prop-types";
import ListBox from "./ListBox";
import Option from "./components/Option";
import Group from "./components/Group";
import Tags from "./components/Tags";

const propTypes = {
  children: node.isRequired,
  placeholder: string,
};

export default function ListBoxWithTags(props) {
  const [tagsSelected, setTagsSelected] = useState([]);

  function renderLabel(_props, state, set) {
    const handleDeleteTag = key => () => {
      const tagsSelectedClone = tagsSelected.slice();
      const index = tagsSelected.indexOf(key);
      tagsSelectedClone.splice(index, 1);
      setTagsSelected(tagsSelectedClone);
      set(_state => {
        const selectedOptionsClone = _state.selectedOptions.slice();
        const _index = _state.selectedOptions.indexOf(key);
        selectedOptionsClone.splice(_index, 1);

        return {
          ..._state,
          activeElement: 0,
          isPopoverOpen: true,
          selectedOptions: selectedOptionsClone,
        };
      });
    };

    useEffect(() => {
      if (state.selectedOptions.length) {
        setTagsSelected(state.selectedOptions);
      }
    }, [state.selectedOptions]);

    return (
      <Tags {..._props}>
        {state.selectedOptions.length &&
          state.selectedOptions.map(key => (
            <Tags.Option key={state.options[key].id} onDelete={handleDeleteTag(key)}>
              {state.options[key].content}
            </Tags.Option>
          ))}
      </Tags>
    );
  }

  return (
    <ListBox {...props} isMulti renderLabel={renderLabel}>
      {React.Children.map(props.children, (child, index) => {
        if (tagsSelected.length && tagsSelected.includes(index)) {
          return React.cloneElement(child, { ...child.props, isHidden: true });
        }
        return child;
      })}
    </ListBox>
  );
}

ListBoxWithTags.propTypes = propTypes;
ListBoxWithTags.Option = Option;
ListBoxWithTags.Group = Group;
