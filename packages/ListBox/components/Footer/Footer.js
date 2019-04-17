import React from "react";
import Button from "@paprika/button";
import PropTypes from "prop-types";
import { FooterContainerStyled } from "./Footer.styles";
import useListBox from "../../useListBox";
import callbackParameters from "../../helpers/callbackParameters";

const propTypes = {
  isAcceptVisible: PropTypes.bool,
  isCancelVisible: PropTypes.bool,
  isClearVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
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
  isDisabled: false,
  kindAccept: "primary",
  kindCancel: "minor",
  kindClear: "minor",
  labelAccept: "Accept",
  labelCancel: "Cancel",
  labelClear: "Clear",
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

const Footer = React.forwardRef((props, ref) => {
  const [state, dispatch] = useListBox();

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

    const result = onClickAccept(callbackParameters(state, dispatch));
    if (typeof result === "boolean" && result === false) {
      return;
    }

    dispatch({ type: useListBox.types.accept });
  };

  const handleClickCancel = event => {
    event.stopPropagation();

    const result = onClickCancel(callbackParameters(state, dispatch));
    if (typeof result === "boolean" && result === false) {
      return;
    }
    dispatch({ type: useListBox.types.cancel });
  };

  const handleClickClear = event => {
    event.stopPropagation();
    const result = onClickClear(callbackParameters(state, dispatch));
    if (typeof result === "boolean" && result === false) {
      return;
    }
    dispatch({ type: useListBox.types.clear, payload: { isPopoverOpen: true } });
  };

  const { isDisabled } = props;

  return (
    <FooterContainerStyled ref={ref}>
      <div>
        {isAcceptVisible && (
          <Button isDisabled={isDisabled} kind={kindAccept} size={size} onClick={handleClickAccept}>
            {labelAccept}
          </Button>
        )}
        {isCancelVisible && (
          <Button isDisabled={isDisabled} kind={kindCancel} size={size} onClick={handleClickCancel}>
            {labelCancel}
          </Button>
        )}
      </div>
      <div>
        {isClearVisible && (
          <Button isDisabled={isDisabled} kind={kindClear} size={size} onClick={handleClickClear}>
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
