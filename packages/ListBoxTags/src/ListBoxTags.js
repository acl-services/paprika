import React from "react";
import PropTypes from "prop-types";
import ListBox from "@paprika/listbox";
import Pill, { Pills } from "./components/Pill";
import * as sc from "./ListBoxTags.styles";

const propTypes = {
  children: PropTypes.isRequired,
  onAddedOption: PropTypes.func,
};

const defaultProps = {
  onAddedOption: () => {},
};

const renderTrigger = ({ size, refListBox }) => (...args) => {
  const [selected, options, currentSelected, attributes] = args;
  const { propsForTrigger, refTrigger, dispatch, types, handleKeyDown, handleKeyUp } = attributes;

  function handleClick(event) {
    // we don't want to close the popover if the user click enter or space to select an option
    if (event.key === "Enter" || event.key === " ") return;
    dispatch({ type: types.togglePopover });
  }

  const handleDelete = option => event => {
    event.stopPropagation();
    refListBox.current.toggleSelectedOption(option.index);
  };

  return (
    <sc.Trigger
      ref={refTrigger}
      {...propsForTrigger()}
      onClick={handleClick}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      size={size}
    >
      <Pills>
        {selected.map(index => {
          return <Pill onDelete={handleDelete(options[index])}>{options[index].label}</Pill>;
        })}
        {selected.length ? null : <div>Open me</div>}
      </Pills>
    </sc.Trigger>
  );
};

export default function ListBoxTags(props) {
  const {
    children,
    onAddedOption,
    size = ListBox.types.size.MEDIUM, // eslint-disable-line
    ...moreProps
  } = props;

  const refListBox = React.useRef(null);
  const refFilter = React.useRef(null);

  function handleKeyDown(event) {
    const label = event.target.value;
    const regexEmail = /^.+@.+\..+$/;
    if (event.key === "Enter" && regexEmail.test(label)) {
      console.log("email: ", event.target.value);
      refFilter.current.clear();
      refListBox.current.close();
      onAddedOption(label);
    }
  }

  return (
    <ListBox ref={refListBox} isMulti size={size} {...moreProps}>
      <ListBox.Trigger>{renderTrigger({ size, refListBox })}</ListBox.Trigger>
      <ListBox.Filter ref={refFilter} onKeyDown={handleKeyDown} />
      {children}
    </ListBox>
  );
}

ListBoxTags.propTypes = propTypes;
ListBoxTags.defaultProps = defaultProps;
ListBoxTags.Option = ListBox.Option;
