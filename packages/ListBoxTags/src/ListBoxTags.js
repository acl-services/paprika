import React from "react";
import PropTypes from "prop-types";
import ListBox from "@paprika/listbox";
import Input from "@paprika/input";
import Fuse from "fuse.js";
import Pill, { Pills } from "./components/Pill";
import * as sc from "./ListBoxTags.styles";

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  isOptionSelected: PropTypes.func,
  onChange: PropTypes.func,
  onChangeFilter: PropTypes.func,
  renderOption: PropTypes.func,
};
const defaultProps = {
  data: [],
  renderOption: null,
  onChangeFilter: () => {},
  onChange: () => {},
  isOptionSelected: () => {},
};

function applyFilter(searchTerm, options) {
  const fuze = new Fuse(options, { includeScore: true, includeMatches: true, keys: ["label"] });
  return fuze.search(searchTerm).map(result => result.item);
}

const renderTrigger = ({ onChangeFilter, refListBox }) => (...args) => {
  const [selected, options, currentSelected, attributes] = args;
  const { propsForTrigger, refTrigger, dispatch, types, handleKeyDown, handleKeyUp } = attributes;

  function handleClick(event) {
    // we don't want to close the popover if the user click enter or space to select an option
    if (event.key === "Enter" || event.key === " ") return;
    dispatch({ type: types.togglePopover });
  }

  function handleChange(event) {
    onChangeFilter(event.target.value);
    if (refListBox.current && "setActiveOptionIndex" in refListBox.current) {
      /**
       * this wait a render cycle and then force the active option index (key up key down position)
       * to reset with zero index position, so when the user search and the list is dynamically changing
       * the index is always 0 and the user always can either click enter or space, up or down, to get the most
       * convenient option.
       */
      requestAnimationFrame(() => {
        refListBox.current.setActiveOptionIndex();
      });
    }
  }

  return (
    <div ref={refTrigger} {...propsForTrigger()}>
      <div>
        {selected.map(index => {
          return <div>{options[index].label}</div>;
        })}
      </div>
      <Input onClick={handleClick} onKeyUp={handleKeyUp} onKeyDown={handleKeyDown} onChange={handleChange} />
    </div>
  );
};

export default function ListBoxTags(props) {
  const { data, renderOption, onChange, onChangeFilter, isOptionSelected } = props;
  const refListBox = React.useRef(null);

  return (
    <ListBox ref={refListBox} isMulti onChange={onChange}>
      <ListBox.Popover shouldKeepFocus />
      <ListBox.Trigger>{renderTrigger({ onChangeFilter, refListBox })}</ListBox.Trigger>
      {data.map((option, index) => {
        if (typeof option.label !== "string")
          throw new Error("data array prop must have all their object items with an label (:string) property");

        if (typeof option.isDivider !== "undefined") {
          return <ListBox.Divider {...option}>{option.label}</ListBox.Divider>;
        }

        return (
          <ListBox.Option {...option} isSelected={isOptionSelected(index, option)} key={option.label}>
            {typeof renderOption === "function" ? renderOption(option) : option.label}
          </ListBox.Option>
        );
      })}
    </ListBox>
  );
}

const renderTrigger2 = (...args) => {
  const [selected, options, currentSelected, attributes] = args;
  const { propsForTrigger, refTrigger, dispatch, types, handleKeyDown, handleKeyUp } = attributes;

  function handleClick(event) {
    // we don't want to close the popover if the user click enter or space to select an option
    if (event.key === "Enter" || event.key === " ") return;
    dispatch({ type: types.togglePopover });
  }

  return (
    <sc.Trigger
      ref={refTrigger}
      {...propsForTrigger()}
      onClick={handleClick}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
    >
      <Pills>
        {selected.map(index => {
          return <Pill>{options[index].label}</Pill>;
        })}
        {selected.length ? null : <div>Open me</div>}
      </Pills>
    </sc.Trigger>
  );
};

export function ListBoxTags2({ children, moreProps }) {
  return (
    <ListBox isMulti {...moreProps}>
      <ListBox.Trigger>{renderTrigger2}</ListBox.Trigger>
      <ListBox.Filter />
      {children}
    </ListBox>
  );
}

ListBoxTags.propTypes = propTypes;
ListBoxTags.defaultProps = defaultProps;
ListBoxTags.filter = applyFilter;
