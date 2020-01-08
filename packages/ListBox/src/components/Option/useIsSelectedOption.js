import React from "react";
import useListBox from "../../useListBox";
import { selectSingleOption, selectMultipleOption } from "../Options/helpers/options";

// prevents onChange to be fired twice when props are changed.
const noop = () => {};

export default function useIsSelectedOption({ index, props }) {
  const [state, dispatch] = useListBox();

  React.useEffect(() => {
    if (props.isSelected !== null) {
      if (state.isMulti) {
        selectMultipleOption({
          activeOptionIndex: index,
          dispatch,
          isSelected: props.isSelected,
          onChange: noop,
        });
        return;
      }

      if (props.isSelected === true) {
        // we want to execute the method exclusively on the prop with selected === true
        selectSingleOption({ activeOptionIndex: index, state, dispatch, isOpen: false, onChange: noop });
      }
    }
  }, [dispatch, index, props.isSelected]); // eslint-disable-line
}
