import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import Input from "@paprika/input";
import SearchIcon from "@paprika/icon/lib/Search";
import ListBox from "../..";

import { filter } from "../../helpers/filter";
import * as sc from "./WithSearch.styles";

const propTypes = {
  children: PropTypes.instanceOf(ListBox.Option).isRequired,
  filter: PropTypes.func,
  noResultsMessage: PropTypes.node,
  onChange: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const defaultProps = {
  filter: PropTypes.func,
  onChange: PropTypes.func,
  noResultsMessage: "No user were found ***(Replace with I18n)***",
};

function useTrigger() {
  const refInput = React.useRef();
  const [value, setValue] = React.useState("");

  const handleClickTrigger = ({ dispatch, types }) => event => {
    event.stopPropagation();
    refInput.current.focus();
    dispatch({ type: types.togglePopover });
  };

  const handleBlur = ({ dispatch, types }) => () => {
    dispatch({ type: types.closePopover });
  };

  const handleKeyDownTrigger = ({ dispatch, types }) => () => {
    refInput.current.focus();
  };

  function handleChangeInput(event) {
    setValue(event.target.value);
  }

  return {
    inputValue: value,
    onBlurInput: handleBlur,
    onBlurTrigger: handleBlur,
    onChangeInput: handleChangeInput,
    onClickTrigger: handleClickTrigger,
    onKeyDownTrigger: handleKeyDownTrigger,
    refInput,
  };
}

const renderTrigger = ({
  inputValue,
  onBlurInput,
  onBlurTrigger,
  onChangeInput,
  onClickTrigger,
  onKeyDownTrigger,
  refInput /* t, selectedOptions, onRemove, renderPill */,
  size,
}) => (...args) => {
  const [, , , attributes] = args;
  const { propsForTrigger, refTrigger, dispatch, types, handleKeyDown, handleKeyUp, isOpen } = attributes;

  function handleClickInput(event) {
    event.stopPropagation();
    if (!isOpen) dispatch({ type: types.openPopover });
  }

  function handleKeyDownInput(event) {
    handleKeyDown(event);

    // we don't want to open the popover if the key is ESCAPE
    if (event.key === "Escape") {
      return;
    }

    event.stopPropagation();
    if (!isOpen) dispatch({ type: types.openPopover });
  }

  function handleKeyUpInput(event) {
    handleKeyUp(event);

    if (event.key === "Escape") {
      return;
    }

    event.stopPropagation();
    // prevents from toggling the popover automatically by the trigger
    if (event.key === " " || event.key === "Enter") {
      debugger;
      dispatch({ type: types.openPopover });
      return;
    }

    if (!isOpen) dispatch({ type: types.openPopover });
  }

  function handleClear() {
    debugger;
  }

  return (
    <sc.Trigger
      ref={refTrigger}
      {...propsForTrigger()}
      onBlur={onBlurTrigger({ dispatch, types })}
      onClick={onClickTrigger({ dispatch, types })}
      onKeyDown={onKeyDownTrigger({ dispatch, types })}
      size={size}
      data-anchor="list-box-with-search.trigger"
    >
      <Input
        hasClearButton
        icon={<SearchIcon />}
        onBlur={onBlurInput({ dispatch, types })}
        onChange={onChangeInput}
        onClick={handleClickInput}
        onKeyDown={handleKeyDownInput}
        onKeyUp={handleKeyUpInput}
        onClear={handleClear}
        ref={refInput}
        type="text"
        value={inputValue}
      />
    </sc.Trigger>
  );
};

export default function WithSearch(props) {
  const { children, filter, noResultsMessage, onChange, data, ...moreProps } = props;
  const { t } = useI18n();
  const {
    inputValue,
    onBlurInput,
    onBlurTrigger,
    onChangeInput,
    onClickTrigger,
    onKeyDownTrigger,
    refInput,
  } = useTrigger();

  const refDivRoot = React.useRef(null);
  /* eslint-disable react/prop-types */
  const size =
    typeof props.size !== "undefined" && Object.keys(ListBox.types.size).includes(props.size.toUpperCase())
      ? props.size
      : ListBox.types.size.MEDIUM;
  /* eslint-enable react/prop-types */

  function handleChange(...args) {
    onChange(...args);
  }

  return (
    <div ref={refDivRoot}>
      <ListBox isMulti size={size} onChange={handleChange} {...moreProps}>
        <ListBox.Popover shouldKeepFocus />
        <ListBox.Trigger>
          {renderTrigger({
            inputValue,
            onBlurInput,
            onBlurTrigger,
            onChangeInput,
            onClickTrigger,
            onKeyDownTrigger,
            refInput,
            size,
            t,
          })}
        </ListBox.Trigger>
        {React.Children.count(children) > 0 ? children : <ListBox.RawItem>{noResultsMessage}</ListBox.RawItem>}
      </ListBox>
    </div>
  );
}

WithSearch.propTypes = propTypes;
WithSearch.defaultProps = defaultProps;
WithSearch.Option = ListBox.Option;
WithSearch.filter = filter;
