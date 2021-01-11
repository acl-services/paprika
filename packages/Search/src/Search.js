import React from "react";
import PropTypes from "prop-types";
import ListBox from "@paprika/list-box";
import SearchIcon from "@paprika/icon/lib/Search";
import useI18n from "@paprika/l10n/lib/useI18n";
import { filter } from "@paprika/list-box/lib/helpers/filter";
import renderTrigger from "./renderTrigger";
import useTrigger from "./useTrigger";

const propTypes = {
  children: PropTypes.node.isRequired,
  onChangeSearch: PropTypes.func,
  onSelected: PropTypes.func,
};

const defaultProps = {
  onChangeSearch: () => {},
  onSelected: () => {},
};
export default function Search(props) {
  const refSelected = React.useRef(null);
  const { children, onChangeSearch, onSelected, ...moreProps } = props;
  const { t } = useI18n();
  const {
    inputValue,
    nextKey,
    onBlurInput,
    onBlurTrigger,
    onChangeInput,
    onKeyDownTrigger,
    refInput,
    refListBoxReducer,
    resetValue,
    setInputValue,
    setNextKey,
  } = useTrigger();

  const [currentKey, setCurrentKey] = React.useState(nextKey);

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
      setInput(value) {
        setInputValue(value);
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
    }
  }

  React.useEffect(() => {
    // this reset the ListBox each time there is not value on the input
    // no doing it and pressing enter will fire the current ListBox highlighted index
    // reporting an onchange event on the listbox even when that's not the intention of the user
    if (inputValue === "" && nextKey !== currentKey) {
      setNextKey(prev => prev + 1);
      refSelected.current = null;
      processSelected({
        value: null,
        label: null,
      });
    } else {
      setCurrentKey(prev => prev + 1);
    }
  }, [inputValue]); // eslint-disable-line

  React.useEffect(() => {
    // after the nextKey is change we focus on the listBox again
    refInput.current.focus();
  }, [nextKey, refInput]);

  return (
    <div ref={refDivRoot}>
      <ListBox key={nextKey} size={size} onChange={handleChange}>
        <ListBox.Popover shouldKeepFocus />
        <ListBox.Trigger>
          {renderTrigger({
            inputValue,
            onBlurInput,
            onBlurTrigger,
            onChangeInput,
            onChangeSearch,
            onKeyDownTrigger,
            onSubmit,
            refInput,
            refListBoxReducer,
            size,
            t,
            setNextKey,
            inputMoreProps: moreProps,
          })}
        </ListBox.Trigger>
        {inputValue ? (
          <ListBox.Option value={inputValue} label={inputValue}>
            <SearchIcon /> {inputValue} - <em>{t("search.searchTerm")}</em>
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
