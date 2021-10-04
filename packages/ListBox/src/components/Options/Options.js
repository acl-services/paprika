import React from "react";
import { isWhiteListed, isOptionVisible, isOptionSelected, handleClickOption } from "./helpers/options";
import { OnChangeContext } from "../../store/OnChangeProvider";
import useListBox from "../../useListBox";

function Options(props) {
  const [state, dispatch] = useListBox();
  const onChangeContext = React.useContext(OnChangeContext);

  const memoizedOnClickHandler = React.useCallback(
    ({ event, isDisabled, onClick, index }) => {
      const clickOptionState = {
        options: state.options,
        hasFilter: state.hasFilter,
        isMulti: state.isMulti,
        refListBox: state.refListBox,
        refListContainer: state.refListBoxContainer,
      };
      handleClickOption({ event, onClick, index, isDisabled, state: clickOptionState, dispatch, onChangeContext });
    },
    [
      state.options,
      state.hasFilter,
      state.isMulti,
      state.refListBox,
      state.refListBoxContainer,
      dispatch,
      onChangeContext,
    ]
  );

  const { children, isPopoverOpen } = props;
  let index = -1;
  return React.Children.map(children, child => {
    if (child === null) return null;

    const type = child.type.type || child.type;

    const { displayName = null } = type;

    if (type && isWhiteListed(displayName)) {
      index += 1;
      const isSelected = isOptionSelected(state, index);
      if (typeof state.options[index] === "undefined" || !isOptionVisible(state, index)) {
        return null;
      }

      const id = state.options[index].id;
      return React.cloneElement(child, {
        ...child.props,
        id,
        index,
        isPopoverOpen,
        handleOnClick: memoizedOnClickHandler,
        isSelectedValue: isSelected,
      });
    }

    return child;
  });
}

// Options = React.memo(Options);
export default Options;
