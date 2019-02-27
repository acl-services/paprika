import React from "react";
import { bool, func, string } from "prop-types";
import useStore from "../../store/useStore";
import * as actionTypes from "../../store/actionTypes";

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
  placeholder: string,
  renderFilter: func,
};

const defaultProps = {
  defaultTextSearch: "",
  renderFilter: null,
  filter: null,
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
  const [state, dispatch] = useStore();

  const [textSearch, setTextSearch] = React.useState(props.defaultTextSearch);
  const [groupsFiltered, setGroupFilter] = React.useState([]);

  const toggleGroupFilterChecked = group => event => {
    event.stopPropagation();

    const isChecked = event.target.checked;
    const groups = groupsFiltered.slice();
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
    const { options } = state;
    const keys = Object.keys(options);
    if (keys.length) {
      if (props.filter) {
        return props.filter(textSearchValue, options);
      }

      const filteredOptions = keys.filter(key => {
        const hasLabel = typeof options[key].content === "string" || options[key].label || null;

        if (hasLabel) {
          const label = options[key].content === "string" || options[key].label;

          const filterRegExp = new RegExp(escapeRegExp(textSearchValue), "gi");
          return label.match(filterRegExp);
        }

        throw new Error(
          `Textsearch: ${textSearchValue} during ${options[key]}.
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

    dispatch({
      type: actionTypes.applyFilter,
      payload: {
        filteredOptions,
        hasNoResults: textSearchValue && filteredOptions.length === 0,
      },
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

  if (state.hasFilter && state.isPopoverOpen) {
    if (props.renderFilter) {
      return props.renderFilter(props);
    }

    return (
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
          groups={state.groups}
          groupsFiltered={groupsFiltered}
          onToggleGroup={toggleGroupFilterChecked}
        />
      </FilterContainerStyled>
    );
  }

  return null;
});

Filter.propTypes = propTypes;

Filter.defaultProps = defaultProps;

export default Filter;
