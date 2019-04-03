import React from "react";
import PropTypes from "prop-types";
import useListBox from "../../store/useListBox";
import { isOptionVisible } from "../../helpers/options";
import * as effects from "./effects";
import * as actionTypes from "../../store/actionTypes";

import { FilterContainerStyled, FilterInputStyled, FilterSearchIconStyled } from "./Filter.styles";

const propTypes = {
  filter: PropTypes.func,
  forceShowFilter: PropTypes.bool,
  onKeyDown: PropTypes.func,
  hasSearchIcon: PropTypes.bool,
  onChangeFilter: PropTypes.func,
  placeholder: PropTypes.string,
  renderFilter: PropTypes.func,
  value: PropTypes.string,
};

const defaultProps = {
  filter: null,
  forceShowFilter: false,
  onKeyDown: null,
  hasSearchIcon: true,
  onChangeFilter: null,
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

  function applyFilter({ filteredOptions, hasNoResults }) {
    dispatch({
      type: actionTypes.applyFilter,
      payload: {
        filteredOptions,
        hasNoResults,
      },
    });
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

      return filteredOptions.map(key => Number.parseInt(key, 10)).filter(keyInt => isOptionVisible(state, keyInt));
    }

    return [];
  }

  const handleChangeFilter = event => {
    const textSearchValue = event.target.value;

    if (props.onChangeFilter) {
      props.onChangeFilter(event);
    } else {
      setTextSearch(textSearchValue);
    }

    const filteredOptions = filter(textSearchValue);
    const hasNoResults = textSearchValue && filteredOptions.length === 0;
    applyFilter({ filteredOptions, hasNoResults });
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

  const handleBlur = () => {
    window.requestAnimationFrame(() => {
      if (state.Footer) {
        // if has footer the responsible of closing is the Footer no the onblur event
        return;
      }

      if (document.activeElement !== state.refListBoxContainer.current) {
        // this will reset the activeOption and close the Popover
        dispatch({
          type: actionTypes.setActiveOption,
          payload: {
            activeOptionIndex: null,
            isPopoverOpen: false,
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

  if (props.forceShowFilter || (state.isInlineDisplay && state.hasFilter) || (state.hasFilter && state.isPopoverOpen)) {
    const { renderFilter, placeholder, value, onChangeFilter, ...moreProps } = props;
    if (renderFilter) {
      return props.renderFilter(props);
    }

    return (
      <FilterContainerStyled>
        {props.hasSearchIcon ? <FilterSearchIconStyled /> : null}
        <FilterInputStyled
          ref={state.refFilterInput}
          type="text"
          onChange={handleChangeFilter}
          onKeyDown={props.onKeyDown || handleKeyDown}
          onBlur={handleBlur}
          value={value || textSearch || ""}
          placeholder={placeholder}
          {...moreProps}
        />
      </FilterContainerStyled>
    );
  }

  return null;
}

Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;
