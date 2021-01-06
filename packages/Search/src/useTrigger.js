import React from "react";
import invokeOnChange from "@paprika/list-box/lib/helpers/invokeOnChange";

export default function useTrigger() {
  const refInput = React.useRef();
  const refListBoxReducer = React.useRef({ types: null, dispatch: null });
  const [value, setValue] = React.useState("");
  const [nextKey, setNextKey] = React.useState(0);

  const handleClickTrigger = ({ dispatch, types }) => event => {
    event.stopPropagation();
    refInput.current.focus();
    dispatch({ type: types.togglePopover });
  };

  const handleBlur = ({ dispatch, types }) => () => {
    dispatch({ type: types.closePopover });
  };

  const handleKeyDownTrigger = () => () => {
    refInput.current.focus();
  };

  function resetValue() {
    setValue("");
    setNextKey(prev => prev + 1);
  }

  const handleChangeInput = ({ dispatch, types, onChangeContext, onChangeSearch }) => event => {
    setValue(event.target.value);
    dispatch({ type: types.setActiveOption, payload: { activeOptionIndex: 0 } });

    event.persist();
    window.requestAnimationFrame(() => {
      dispatch({
        type: types.selectSingleOption,
        payload: {
          isOpen: true,
          activeOptionIndex: 0,
          onChangeFn: invokeOnChange(onChangeContext, "list-box:option-selected"),
        },
      });

      dispatch({ type: types.openPopover });
      if (event.target.value === "") {
        dispatch({ type: types.closePopover });
      }

      onChangeSearch(event.target.value);
    });
  };

  return {
    inputValue: value,
    nextKey,
    onBlurInput: handleBlur,
    onBlurTrigger: handleBlur,
    onChangeInput: handleChangeInput,
    onClickTrigger: handleClickTrigger,
    onKeyDownTrigger: handleKeyDownTrigger,
    refInput,
    refListBoxReducer,
    resetValue,
    setInputValue: setValue,
    setNextKey,
  };
}
