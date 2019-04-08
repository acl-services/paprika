import React from "react";
import Button from "@paprika/button";
import PropTypes from "prop-types";
import { FooterContainerStyled } from "./Footer.styles";
import * as actionTypes from "../../store/actionTypes";
import useListBox from "../../store/useListBox";

const propTypes = {
  isAcceptVisible: PropTypes.bool,
  isCancelVisible: PropTypes.bool,
  isClearVisible: PropTypes.bool,
  kindAccept: PropTypes.string,
  kindCancel: PropTypes.string,
  kindClear: PropTypes.string,
  labelAccept: PropTypes.string,
  labelCancel: PropTypes.string,
  labelClear: PropTypes.string,
  onClickAccept: PropTypes.func,
  onClickCancel: PropTypes.func,
  onClickClear: PropTypes.func,
  size: PropTypes.string,
};

const defaultProps = {
  isAcceptVisible: true,
  isCancelVisible: true,
  isClearVisible: true,
  labelAccept: "Accept",
  labelCancel: "Cancel",
  labelClear: "Clear",
  kindAccept: "primary",
  kindCancel: "minor",
  kindClear: "minor",
  onClickAccept: () => {
    return true;
  },
  onClickCancel: () => {
    return true;
  },
  onClickClear: () => {
    return true;
  },
  size: "small",
};

function getSelectedOptionSingle(state) {
  const activeOptionIndex =
    state.selectedOptions && state.selectedOptions.length === 0 ? null : state.selectedOptions[0];
  return [activeOptionIndex, state.options];
}

function getSelectedOptionsMulti(state) {
  return [state.selectedOptions, state.options, state.activeOptionIndex];
}

function getSelectedOptions(state) {
  if (state.isMulti) {
    return getSelectedOptionsMulti(state);
  }

  return getSelectedOptionSingle(state);
}

const Footer = React.forwardRef((props, ref) => {
  const [state, dispatch] = useListBox();

  const args = [state.options, state, dispatch];

  const {
    onClickCancel,
    onClickAccept,
    onClickClear,
    labelCancel,
    labelAccept,
    labelClear,
    isCancelVisible,
    isAcceptVisible,
    isClearVisible,
    kindAccept,
    kindCancel,
    kindClear,
    size,
  } = props;

  const handleClickAccept = event => {
    event.stopPropagation();

    const result = onClickAccept(...[...getSelectedOptions(state), ...args]);
    if (typeof result === "boolean" && result === false) {
      return;
    }

    dispatch({ type: actionTypes.accept });
  };

  const handleClickCancel = event => {
    event.stopPropagation();

    const result = onClickCancel(...[...getSelectedOptions(state), ...args]);
    if (typeof result === "boolean" && result === false) {
      return;
    }
    dispatch({ type: actionTypes.cancel });
  };

  const handleClickClear = event => {
    event.stopPropagation();
    const result = onClickClear(...[...getSelectedOptions(state), ...args]);
    if (typeof result === "boolean" && result === false) {
      return;
    }
    dispatch({ type: actionTypes.clear, payload: { isPopoverOpen: true } });
  };

  return (
    <FooterContainerStyled ref={ref}>
      <div>
        {isAcceptVisible && (
          <Button kind={kindAccept} size={size} onClick={handleClickAccept}>
            {labelAccept}
          </Button>
        )}
        {isCancelVisible && (
          <Button kind={kindCancel} size={size} onClick={handleClickCancel}>
            {labelCancel}
          </Button>
        )}
      </div>
      <div>
        {isClearVisible && (
          <Button kind={kindClear} size={size} onClick={handleClickClear}>
            {labelClear}
          </Button>
        )}
      </div>
    </FooterContainerStyled>
  );
});

export default Footer;

Footer.componentType = "ListBox.Footer";
Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
