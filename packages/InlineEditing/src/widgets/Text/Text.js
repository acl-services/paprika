import React from "react";
import PropTypes from "prop-types";
import { size as sizeConstant } from "@paprika/constants";
import Input from "@paprika/input";

import * as sc from "./Text.styles";

const propTypes = {
  value: PropTypes.string.isRequired,
  columnWidth: PropTypes.number,
  status: PropTypes.string.isRequired,
  statusTypes: PropTypes.shape({}),
  close: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  rowIndex: PropTypes.number.isRequired,
  columnIndex: PropTypes.number.isRequired,
  size: PropTypes.string,
  editIcon: PropTypes.node,
};

const defaultProps = {
  columnWidth: null,
  statusTypes: {},
  size: sizeConstant.MEDIUM,
  editIcon: null,
  onChange: () => {
    console.log(
      `The component is trying to invoke and onChange but is not declared as onChange prop in one of your columnDefinition component`
    );
  },
};

export default function Text(props) {
  const {
    value: initValue,
    columnWidth,
    status,
    statusTypes: on,
    close,
    size,
    error,
    errorMessage,
    onChange,
    rowIndex,
    columnIndex,
    editIcon,
    Popover,
    popoverProps,
  } = props;

  const [value, setValue] = React.useState(initValue);

  const refInput = React.useRef(null);

  function handleChange(event) {
    setValue(event.target.value);
    event.stopPropagation();
  }

  function handleBlur() {
    close();
  }

  React.useEffect(() => {
    if (status === on.EDITING) {
      refInput.current.focus();
    }
  }, [status, on]);

  // requires useCallback to maintain Referential equality
  function handleKeyUp(event) {
    if (event.key === "Escape") {
      close();
    }

    if (event.key === "Enter") {
      onChange({ nextValue: refInput.current.value, rowIndex, columnIndex, error, close });
    }
    event.stopPropagation();
  }

  function handleKeyDown(event) {
    event.stopPropagation();
  }

  if (status === on.EDITING) {
    return (
      <sc.Input>
        <Input
          ref={refInput}
          onKeyUp={handleKeyUp}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          value={value}
          size={size}
          className="text-inline-input"
        />
        {errorMessage !== null ? (
          <div style={{ height: "40px", position: "absolute", bottom: 0 }}>{errorMessage}</div>
        ) : null}
      </sc.Input>
    );
  }

  if (status === on.FOCUS) {
    return (
      <Popover {...popoverProps}>
        <sc.Ellipsis size={size}>{value}</sc.Ellipsis>
        <p>
          Push your water glass on the floor poop on grasses so pet me pet me pet me pet me, bite, scratch, why are you
          petting me. Ooooh feather moving feather! purrr purr littel cat, little cat purr purr i rule on my back you
          rub my tummy i bite you hard mewl for food at 4am to pet a cat, rub its belly, endure blood and agony, quietly
          weep, keep rubbing belly, for i can haz. Sleep all day whilst slave is at work, play all night whilst slave is
          sleeping fall{" "}
        </p>
      </Popover>
    );
  }

  return (
    <sc.Text columnWidth={columnWidth} status={status} statusTypes={on}>
      <sc.Ellipsis size={size}>{value}</sc.Ellipsis>
    </sc.Text>
  );
}

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
Text.types = {
  size: sizeConstant,
};
