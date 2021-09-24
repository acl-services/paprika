import React from "react";
import { isWhiteListed, isOptionVisible, isOptionSelected, handleClickOption } from "./helpers/options";
import { OnChangeContext } from "../../store/OnChangeProvider";
import useListBox from "../../useListBox";

function Options(props) {
  const [state, dispatch] = useListBox();
  const onChangeContext = React.useContext(OnChangeContext);

  // const onClickHandler = ({ onClick, index }) =>
  //   handleClickOption({ onClick, index, state, dispatch, onChangeContext });

  const memoizedOnClickHandler = React.useCallback(({ onClick, index }) => {
    handleClickOption({ onClick, index, state, dispatch, onChangeContext });
  }, []); // still needs trimmed deps

  const { children, isPopoverOpen } = props;
  let index = -1;
  return React.Children.map(children, child => {
    if (child === null) return null;

    const { displayName = null } = child.type.type;

    if (child.type.type && isWhiteListed(displayName)) {
      index += 1;
      const isSelected = isOptionSelected(state, index);
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
