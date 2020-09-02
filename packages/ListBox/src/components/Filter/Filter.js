import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import SearchIcon from "@paprika/icon/lib/Search";
import useListBox from "../../useListBox";
import { filter, applyFilter } from "./helpers";
import * as sc from "./Filter.styles";

const propTypes = {
  /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */
  a11yText: PropTypes.string,

  /** Filters the list */
  filter: PropTypes.func,

  /** If true displays a search icon */
  hasSearchIcon: PropTypes.bool,

  /** Message displayed if no results are found */
  noResultsMessage: PropTypes.string,

  /** Callback to be executed when the value is changed  */
  onChangeFilter: PropTypes.func,

  /** Callback to be executed when a key is pressed */
  onKeyDown: PropTypes.func,

  /** Displays a placeholder */
  placeholder: PropTypes.string,

  /** Render function for filter */
  renderFilter: PropTypes.func,

  /** Sets a value for filter */
  value: PropTypes.string,
};

const defaultProps = {
  a11yText: null,
  filter: null,
  hasSearchIcon: true,
  onChangeFilter: null,
  onKeyDown: null,
  placeholder: null,
  noResultsMessage: null,
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
  const I18n = useI18n();

  const reset = React.useCallback(() => {
    window.requestAnimationFrame(() => {
      applyFilter(dispatch, applyFilterType)([], false);
      setTextSearch("");
    });
  }, [applyFilterType, dispatch]);

  React.useImperativeHandle(ref, () => ({
    clear: () => {
      setTextSearch(() => "");
    },
    reset: () => {
      reset();
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
    if (!state.isOpen) {
      reset();
    }
  }, [reset, state.isOpen]);

  React.useEffect(() => {
    dispatch({
      type: useListBox.types.hasFilter,
      payload: true,
    });
  }, [dispatch]);

  if (state.isInline || state.isOpen) {
    const {
      renderFilter,
      placeholder,
      value,
      onChangeFilter,
      filter,
      hasSearchIcon,
      noResultsMessage,
      ...moreProps
    } = props;
    if (renderFilter) {
      return props.renderFilter(props);
    }

    return (
      <sc.Filter data-pka-anchor="list-filter">
        <sc.FilterInput
          a11yText={props.a11yText || I18n.t("listBox.filter.a11y_text")}
          data-pka-anchor="list-filter-input"
          icon={hasSearchIcon ? <SearchIcon /> : null}
          isDisabled={state.isDisabled}
          onBlur={handleBlur}
          onChange={handleChangeFilter}
          onKeyDown={props.onKeyDown}
          placeholder={placeholder || I18n.t("listBox.filter.placeholder")}
          ref={state.refFilterInput}
          value={value || textSearch || ""}
          size={state.size}
          {...moreProps}
        />
      </sc.Filter>
    );
  }

  return null;
});

export default Filter;
Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;
Filter.displayName = "ListBox.Filter";
