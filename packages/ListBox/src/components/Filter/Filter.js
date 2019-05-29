import React from "react";
import PropTypes from "prop-types";
import useListBox from "../../useListBox";
import * as effects from "./effects";
import { filter, applyFilter } from "./helpers";
import { FilterContainerStyled, FilterInputStyled, FilterSearchIconStyled } from "./Filter.styles";

const propTypes = {
  filter: PropTypes.func,
  filterExcludeSelectedOptions: PropTypes.bool,
  hasSearchIcon: PropTypes.bool,
  noResultsMessage: PropTypes.string,
  onChangeFilter: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  renderFilter: PropTypes.func,
  value: PropTypes.string,
};

const defaultProps = {
  filter: null,
  filterExcludeSelectedOptions: false,
  hasSearchIcon: true,
  onChangeFilter: null,
  onKeyDown: null,
  placeholder: "Filter...",
  noResultsMessage: "Your search did not match any options.",
  renderFilter: null,
  value: null,
};

export default function Filter(props) {
  const [state, dispatch] = useListBox();
  const [textSearch, setTextSearch] = React.useState(props.value);
  const applyFilterType = useListBox.types.applyFilter;

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

    const filteredOptions = filter({ props, state, textSearchValue });
    const noResultsFound = textSearchValue && filteredOptions.length === 0;
    applyFilter(dispatch, applyFilterType)(filteredOptions, noResultsFound);
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

  const handleEffectValue = effects.handleEffectValue(props, applyFilter(dispatch, applyFilterType));
  const handleEffectIsPopOverOpen = effects.handleEffectIsPopOverOpen(state, setTextSearch);
  const handleEffectTextSearch = effects.handleEffectTextSearch(textSearch, applyFilter(dispatch, applyFilterType));
  const handleEffectHasFilter = effects.handleEffectHasFilter(dispatch, useListBox.types.hasFilter);

  React.useEffect(handleEffectValue, [props.value]);
  React.useEffect(handleEffectIsPopOverOpen, [state.isOpen]);
  React.useEffect(handleEffectTextSearch, [textSearch]);
  React.useEffect(handleEffectHasFilter, []);

  if (state.isInline || state.isOpen) {
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
Filter.componentType = "ListBox.Filter";
