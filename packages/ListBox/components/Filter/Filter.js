import React, { useState } from "react";
import { number, bool, object, node, func, string, shape, oneOf } from "prop-types";
import {
  FilterContainerStyled,
  FilterGroupFilterLabel,
  FilterInputStyled,
  FilterSearchIconStyled,
} from "./Filter.styles";

const propTypes = {
  defaultTextSearch: string,
  filter: func,
  hasGroupFilter: bool,
  options: shape({
    content: node,
    hasLabel: string,
    id: string,
    index: number,
    label: oneOf([string, node]),
    value: oneOf([string, number, object]),
  }),
  placeholder: string,
  renderFilter: func,
  set: func.isRequired,
  state: object.isRequired, // eslint-disable-line
};

const defaultProps = {
  defaultTextSearch: "",
  renderFilter: null,
  filter: null,
  options: [],
  placeholder: "Filter...",
  hasGroupFilter: false,
};

export function Groups(props) {
  if (props.hasGroupFilter && props.groups.length) {
    return props.groups.map((group, index) => {
      const key = `${group}${index}`;
      return (
        <FilterGroupFilterLabel key={key} htmlFor={key}>
          <input
            id={key}
            onChange={props.onToggleGroup(group)}
            type="checkbox"
            checked={props.groupsFiltered.includes(group)}
          />
          <span>{group}</span>
        </FilterGroupFilterLabel>
      );
    });
  }
  return null;
}

const Filter = React.forwardRef((props, ref) => {
  const [textSearch, setTextSearch] = useState(props.defaultTextSearch);
  const [groupsFiltered, setGroupFilter] = useState([]);

  const toggleGroupFilterChecked = group => event => {
    event.stopPropagation();

    const isChecked = event.target.checked;
    const groups = groupsFiltered.slice();
    const { set, state } = props;
    const optionsKeys = Object.keys(state.options);

    if (isChecked) {
      groups.push(group);

      const filteredOptions = optionsKeys
        .filter(key => groups.includes(state.options[key].groupTitle))
        .map(key => Number.parseInt(key, 10));

      if (filteredOptions.length) {
        set({
          ...state,
          filteredOptions,
          activeOption: 0,
        });
      }
    } else {
      groups.some((g, index) => {
        if (g === group) {
          groups.splice(index, 1);
        }
        return index;
      });

      const filteredOptions = optionsKeys
        .filter(key => groups.includes(state.options[key].groupTitle))
        .map(key => Number.parseInt(key, 10));

      set({
        ...state,
        filteredOptions,
        activeOption: 0,
      });
    }
    setGroupFilter(groups);
  };

  // this might be better using _.escapeRegExp by lodash. But good enough for now
  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
  }

  function filter(textSearchValue) {
    const keys = Object.keys(props.options);
    if (keys.length) {
      if (props.filter) {
        return props.filter(textSearchValue, props.options);
      }

      const filteredOptions = keys.filter(key => {
        const hasLabel = typeof props.options[key].content === "string" || props.options[key].label || null;

        if (hasLabel) {
          const label = props.options[key].content === "string" || props.options[key].label;

          const filterRegExp = new RegExp(escapeRegExp(textSearchValue), "gi");
          return label.match(filterRegExp);
        }

        throw new Error(
          `Textsearch: ${textSearchValue} during ${props.options[key]}.
          ListBox.Filter  filter: <ListBox.Option /> need to have
          a string as a children or please provide a label prop
          <ListBox.Option label='yourOptionDescription' />.`
        );
      });

      if (!filteredOptions.length) {
        return [];
      }

      return filteredOptions.map(key => Number.parseInt(key, 10));
    }

    return [];
  }

  const handleChangeFilter = event => {
    const textSearchValue = event.target.value;
    const filteredOptions = filter(textSearchValue);

    setTextSearch(textSearchValue);

    props.set({
      ...props.state,
      filteredOptions,
      hasNoResults: textSearchValue && filteredOptions.length === 0,
      activeOption: 0,
    });
  };

  const handleKeyDown = event => {
    // Avoid propagation of the cursor
    // at the start or at end of the input when the user click Arrow Up or Down
    // Also prevent to firing the space bar or enter key while filtering

    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
    }

    if (event.key === " ") {
      event.stopPropagation();
    }
  };

  return props.renderFilter ? (
    props.renderFilter(props)
  ) : (
    <FilterContainerStyled>
      <FilterSearchIconStyled />
      <FilterInputStyled
        ref={ref}
        type="text"
        onChange={handleChangeFilter}
        onKeyDown={handleKeyDown}
        value={textSearch}
        placeholder={props.placeholder}
      />
      <Groups
        hasGroupFilter={props.hasGroupFilter}
        groups={props.state.groups}
        groupsFiltered={groupsFiltered}
        onToggleGroup={toggleGroupFilterChecked}
      />
    </FilterContainerStyled>
  );
});

Filter.propTypes = propTypes;

Filter.defaultProps = defaultProps;

export default Filter;
