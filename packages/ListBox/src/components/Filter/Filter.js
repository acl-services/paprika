import React from "react";
import PropTypes from "prop-types";
import useListBox from "../../useListBox";
import { filter, applyFilter } from "./helpers";
import { FilterContainerStyled, FilterInputStyled, FilterSearchIconStyled } from "./Filter.styles";

const propTypes = {
  filter: PropTypes.func,
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
  hasSearchIcon: true,
  onChangeFilter: null,
  onKeyDown: null,
  placeholder: "Filter...",
  noResultsMessage: "Your search did not match any options.",
  renderFilter: null,
  value: null,
};

function hasNoResults(textSearchValue, filteredOptions) {
  return textSearchValue && (filteredOptions && filteredOptions.length === 0);
}

const Filter = React.forwardRef((props, ref) => {
  const [state, dispatch] = useListBox();
  const [textSearch, setTextSearch] = React.useState(props.value);
  const applyFilterType = useListBox.types.applyFilter;

  React.useImperativeHandle(ref, () => ({
    clear: () => {
      setTextSearch(() => "");
    },
  }));

  const handleChangeFilter = event => {
    const textSearchValue = event.target.value;
    if (state.isDisabled) return;

    if (props.filter) {
      setTextSearch(textSearchValue);

      const result = props.filter({ search: textSearchValue });
      if (result && result.then) {
        // detecting if it's a promise
        result.then(response => {
          const filteredOptions = response;
          const noResultsFound = hasNoResults(textSearchValue, filteredOptions);
          applyFilter(dispatch, applyFilterType)(filteredOptions, noResultsFound);
        });
      }
      return;
    }

    if (props.onChangeFilter) {
      props.onChangeFilter(event);
    } else {
      setTextSearch(textSearchValue);
    }

    const filteredOptions = filter({ props, state, textSearchValue });
    const noResultsFound = hasNoResults(textSearchValue, filteredOptions);
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

  React.useEffect(() => {
    if (!props.value) {
      applyFilter({ filteredOptions: [], noResultsFound: false });
    }
  }, [props.value]);

  React.useEffect(() => {
    if (!state.isOpen) {
      setTextSearch("");
    }
  }, [state.isOpen]);

  React.useEffect(() => {
    if (!textSearch) {
      applyFilter({ filteredOptions: [], noResultsFound: false });
    }
  }, [textSearch]);

  React.useEffect(() => {
    dispatch({
      type: useListBox.types.hasFilter,
      payload: true,
    });
  }, [dispatch]);

  if (state.isInline || state.isOpen) {
    const { renderFilter, placeholder, value, onChangeFilter, filter, ...moreProps } = props;
    if (renderFilter) {
      return props.renderFilter(props);
    }

    return (
      <FilterContainerStyled data-pka-anchor="list-filter">
        {props.hasSearchIcon ? <FilterSearchIconStyled /> : null}
        <FilterInputStyled
          data-pka-anchor="list-filter-input"
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
});

export default Filter;
Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;
Filter.displayName = "ListBox.Filter";
