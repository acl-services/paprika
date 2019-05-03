import React from "react";
import PropTypes from "prop-types";
import useListBox from "../../useListBox";
import * as effects from "./effects";

import { FilterContainerStyled, FilterInputStyled, FilterSearchIconStyled } from "./Filter.styles";

const propTypes = {
  filter: PropTypes.func,
  filterExcludeSelectedOptions: PropTypes.bool,
  forceShowFilter: PropTypes.bool,
  hasSearchIcon: PropTypes.bool,
  onChangeFilter: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  renderFilter: PropTypes.func,
  value: PropTypes.string,
};

const defaultProps = {
  filter: null,
  filterExcludeSelectedOptions: false,
  forceShowFilter: false,
  hasSearchIcon: true,
  onChangeFilter: null,
  onKeyDown: null,
  placeholder: "Filter...",
  renderFilter: null,
  value: null,
};

export default function Filter(props) {
  const [state, dispatch] = useListBox();

  const [textSearch, setTextSearch] = React.useState(props.value);

  // this might be better using _.escapeRegExp by lodash. But good enough for now
  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
  }

  function applyFilter({ filteredOptions, noResultsFound }) {
    dispatch({
      type: useListBox.types.applyFilter,
      payload: {
        filteredOptions,
        noResultsFound,
      },
    });
  }

  function filter(textSearchValue) {
    const { options } = state;
    const keys = Object.keys(options);

    if (keys.length) {
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

      if (props.filterExcludeSelectedOptions) {
        return filteredOptions
          .map(key => Number.parseInt(key, 10))
          .filter(keyInt => !state.selectedOptions.includes(keyInt));
      }

      return filteredOptions.map(key => Number.parseInt(key, 10));
    }

    return [];
  }

  const handleChangeFilter = event => {
    const textSearchValue = event.target.value;

    if (state.isDisabled) return;

    if (props.filter) {
      setTextSearch(textSearchValue);
      return props.filter({ search: textSearchValue, state, dispatch });
    }

    if (props.onChangeFilter) {
      props.onChangeFilter(event);
    } else {
      setTextSearch(textSearchValue);
    }

    const filteredOptions = filter(textSearchValue);
    const noResultsFound = textSearchValue && filteredOptions.length === 0;
    applyFilter({ filteredOptions, noResultsFound });
  };

  const handleBlur = () => {
    window.requestAnimationFrame(() => {
      if (state.hasFooter) {
        // if has footer the responsible of closing is the Footer no the onblur event
        return;
      }

      if (document.activeElement !== state.refListBoxContainer.current) {
        // this will reset the activeOption and close the Popover
        dispatch({
          type: useListBox.types.setActiveOption,
          payload: {
            activeOptionIndex: null,
          },
        });
      }
    });
  };

  const handleEffectValue = effects.handleEffectValue(props, applyFilter);
  const handleEffectIsPopOverOpen = effects.handleEffectIsPopOverOpen(state, setTextSearch);
  const handleEffectTextSearch = effects.handleEffectTextSearch(textSearch, applyFilter);

  React.useEffect(handleEffectValue, [props.value]);
  React.useEffect(handleEffectIsPopOverOpen, [state.isPopoverOpen]);
  React.useEffect(handleEffectTextSearch, [textSearch]);

  if (props.forceShowFilter || (state.isInline && state.hasFilter) || (state.hasFilter && state.isPopoverOpen)) {
    const { renderFilter, placeholder, value, onChangeFilter, filter, ...moreProps } = props;
    if (renderFilter) {
      return props.renderFilter(props);
    }

    return (
      <FilterContainerStyled>
        {props.hasSearchIcon ? <FilterSearchIconStyled /> : null}
        <FilterInputStyled
          isDisabled={state.isDisabled}
          onBlur={handleBlur}
          onChange={handleChangeFilter}
          onKeyDown={props.onKeyDown}
          placeholder={placeholder}
          ref={state.refFilterInput}
          type="text"
          value={value || textSearch || ""}
          {...moreProps}
        />
      </FilterContainerStyled>
    );
  }

  return null;
}

Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;
