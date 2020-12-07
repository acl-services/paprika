import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import Input from "@paprika/input";
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

    if (event.key === "Enter" || event.key === " ") {
      dispatch({ type: types.openPopover });
      return;
    }
    dispatch({ type: types.togglePopover });
  };

  const handleBlur = ({ dispatch, types }) => () => {
    dispatch({ type: types.closePopover });
  };

  function handleChangeInput(event) {
    setValue(event.target.value);
  }

  return {
    onClickTrigger: handleClickTrigger,
    onBlurInput: handleBlur,
    onBlurTrigger: handleBlur,
    onChangeInput: handleChangeInput,
    inputValue: value,
    refInput,
  };
}

const renderTrigger = ({
  size,
  inputValue,
  onChangeInput,
  onClickTrigger,
  onBlurInput,
  onBlurTrigger,
  refInput /* t, selectedOptions, onRemove, renderPill */,
}) => (...args) => {
  const [, , , attributes] = args;
  const { propsForTrigger, refTrigger, dispatch, types, handleKeyDown, handleKeyUp } = attributes;

  return (
    <sc.Trigger
      ref={refTrigger}
      {...propsForTrigger()}
      onBlur={onBlurTrigger({ dispatch, types })}
      onClick={onClickTrigger({ dispatch, types })}
      size={size}
      data-anchor="list-box-with-search.trigger"
    >
      <Input
        ref={refInput}
        type="text"
        value={inputValue}
        onChange={onChangeInput}
        onBlur={onBlurInput({ dispatch, types })}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
        className="has-no-border"
      />
    </sc.Trigger>
  );
};

export default function WithSearch(props) {
  const { children, filter, noResultsMessage, onChange, data, ...moreProps } = props;
  const { t } = useI18n();
  const { inputValue, onChangeInput, onClickTrigger, onBlurInput, onBlurTrigger, refInput } = useTrigger();
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
          {renderTrigger({ refInput, size, t, inputValue, onChangeInput, onClickTrigger, onBlurInput, onBlurTrigger })}
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
