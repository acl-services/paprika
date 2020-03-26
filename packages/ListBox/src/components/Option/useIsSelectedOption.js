import React from "react";
import useListBox from "../../useListBox";
import { selectSingleOption, selectMultipleOption } from "../Options/helpers/options";

// prevents onChange to be fired twice when props are changed.
const noop = () => {};

export default function useIsSelectedOption({ index, props }) {
  const [state, dispatch] = useListBox();
  const { isSelected } = props;

  React.useEffect(() => {
    if (isSelected !== null) {
      if (state.isMulti) {
        selectMultipleOption({
          activeOptionIndex: index,
          dispatch,
          isSelected,
          onChange: noop,
          isOpen: state.isOpen,
        });
        return;
      }

      if (isSelected === true) {
        // we want to execute the method exclusively on the prop with selected === true
        selectSingleOption({ activeOptionIndex: index, state, dispatch, isOpen: state.isOpen, onChange: noop });
      }
    }
  }, [dispatch, index, isSelected]); // eslint-disable-line
}
