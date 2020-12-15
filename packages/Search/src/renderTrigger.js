import React from "react";
import Input from "@paprika/input";
import SearchIcon from "@paprika/icon/lib/Search";
import * as sc from "./Search.styles";

const renderTrigger = ({
  countOptions,
  inputValue,
  onBlurInput,
  onBlurTrigger,
  onChangeInput,
  onChangeSearch,
  onClickTrigger,
  onKeyDownTrigger,
  onSubmit: onSubmitProps,
  refInput,
  refListBoxReducer,
  size,
  t,
  /* selectedOptions, onRemove, renderPill */
}) => (...args) => {
  const [, , attributes] = args;
  const {
    dispatch,
    handleKeyDown,
    handleKeyUp,
    isOpen,
    onChangeContext,
    propsForTrigger,
    refTrigger,
    types,
  } = attributes;

  // eslint-disable-next-line
  refListBoxReducer.current.dispatch = dispatch;
  // eslint-disable-next-line
  refListBoxReducer.current.types = types;

  function handleClickInput(event) {
    event.stopPropagation();
    if (!isOpen) dispatch({ type: types.openPopover });
    if (refInput.current.value === "" && countOptions === 0) {
      dispatch({ type: types.closePopover });
    }
  }

  function handleKeyDownInput(event) {
    handleKeyDown(event);

    // we don't want to open the popover if the key is ESCAPE
    if (event.key === "Escape") {
      return;
    }

    if (event.key === "Backspace" && refInput.current.value === "") {
      return;
    }

    event.stopPropagation();

    if (!isOpen && event.key !== "Enter") {
      dispatch({ type: types.openPopover });
    }
  }

  function handleKeyUpInput(event) {
    handleKeyUp(event);

    if (event.key === "Escape") {
      return;
    }

    if (event.key === "Backspace" && refInput.current.value === "") {
      return;
    }

    event.stopPropagation();
    // prevents from toggling the popover automatically by the trigger
    if (event.key === " " || event.key === "Enter") {
      dispatch({ type: types.openPopover });
      return;
    }

    if (!isOpen) dispatch({ type: types.openPopover });
  }

  function handleFocusTrigger() {
    refInput.current.focus();
  }

  function handleChange(event) {
    onChangeInput({ dispatch, types, onChangeContext, onChangeSearch })(event);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitProps(event);
  }

  return (
    <sc.Trigger
      ref={refTrigger}
      {...propsForTrigger()}
      onFocus={handleFocusTrigger}
      onBlur={onBlurTrigger({ dispatch, types })}
      onClick={onClickTrigger({ dispatch, types })}
      onKeyDown={onKeyDownTrigger({ dispatch, types })}
      size={size}
      data-anchor="list-box-with-search.trigger"
    >
      <form role="search" onSubmit={handleSubmit}>
        <Input
          hasClearButton
          icon={<SearchIcon />}
          onBlur={onBlurInput({ dispatch, types })}
          onChange={handleChange}
          onClick={handleClickInput}
          onKeyDown={handleKeyDownInput}
          onKeyUp={handleKeyUpInput}
          ref={refInput}
          type="text"
          value={inputValue}
          placeholder={t("listBox.filter.placeholder")}
        />
      </form>
    </sc.Trigger>
  );
};

export default renderTrigger;
