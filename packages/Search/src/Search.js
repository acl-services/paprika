import React from "react";
import PropTypes from "prop-types";
import Input from "@paprika/input";
import ListBox from "@paprika/list-box";
import SearchIcon from "@paprika/icon/lib/Search";
import invokeOnChange from "@paprika/list-box/lib/helpers/invokeOnChange";
import useI18n from "@paprika/l10n/lib/useI18n";
import { filter } from "@paprika/list-box/lib/helpers/filter";

import * as sc from "./Search.styles";

const propTypes = {
  children: PropTypes.instanceOf(ListBox.Option).isRequired,
  onChangeSearch: PropTypes.func,
  onSelected: PropTypes.func,
};

const defaultProps = {
  onChangeSearch: () => {},
  onSelected: () => {},
};

function useTrigger() {
  const refInput = React.useRef();
  const refListBoxReducer = React.useRef({ types: null, dispatch: null });
  const [value, setValue] = React.useState("");

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
    onBlurInput: handleBlur,
    onBlurTrigger: handleBlur,
    onChangeInput: handleChangeInput,
    onClickTrigger: handleClickTrigger,
    onKeyDownTrigger: handleKeyDownTrigger,
    refInput,
    resetValue,
    refListBoxReducer,
  };
}

const renderTrigger = ({
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
    if (refInput.current.value === "") {
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
      debugger;
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

export default function Search(props) {
  const refSelected = React.useRef(null);
  const { children, onChangeSearch, onSelected, ...moreProps } = props;
  const { t } = useI18n();
  const {
    inputValue,
    onBlurInput,
    onBlurTrigger,
    onChangeInput,
    onClickTrigger,
    onKeyDownTrigger,
    refInput,
    refListBoxReducer,
    resetValue,
  } = useTrigger();

  const refDivRoot = React.useRef(null);
  /* eslint-disable react/prop-types */
  const size =
    typeof props.size !== "undefined" && Object.keys(ListBox.types.size).includes(props.size.toUpperCase())
      ? props.size
      : ListBox.types.size.MEDIUM;
  /* eslint-enable react/prop-types */

  function processSelected(value) {
    const dispatch = refListBoxReducer.current.dispatch;
    const types = refListBoxReducer.current.types;

    const actions = {
      open() {
        dispatch({ type: types.openPopover });
      },
      close() {
        dispatch({ type: types.closePopover });
      },
      cleanInput() {
        resetValue(); // input search value
      },
    };
    refSelected.current = null; // selected ref value
    onSelected(value, actions);
  }

  function handleChange(index, options, attributes) {
    const { eventType } = attributes;

    if (eventType.includes("click")) {
      const { value, label } = options[index].content.props;
      processSelected({
        value,
        label,
      });
      return;
    }

    refSelected.current = options[index];
  }

  function onSubmit() {
    if (refSelected.current) {
      const { value, label } = refSelected.current.content.props;
      processSelected({
        value,
        label,
      });
      return;
    }

    processSelected(null);
  }

  return (
    <div ref={refDivRoot}>
      <ListBox size={size} onChange={handleChange} {...moreProps}>
        <ListBox.Popover shouldKeepFocus />
        <ListBox.Trigger>
          {renderTrigger({
            children,
            inputValue,
            onBlurInput,
            onBlurTrigger,
            onChangeInput,
            onChangeSearch,
            onClickTrigger,
            onKeyDownTrigger,
            onSubmit,
            refInput,
            refListBoxReducer,
            size,
            t,
          })}
        </ListBox.Trigger>
        {inputValue ? (
          <ListBox.Option value={inputValue} label={inputValue}>
            <SearchIcon /> {inputValue} - <em>Search term...</em>
          </ListBox.Option>
        ) : null}
        {React.Children.count(children) > 0 ? children : null}
      </ListBox>
    </div>
  );
}

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;
Search.Option = ListBox.Option;
Search.filter = filter;
Search.RawItem = ListBox.RawItem;
Search.Divider = ListBox.Divider;
