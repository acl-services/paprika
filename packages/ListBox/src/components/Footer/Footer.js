import React from "react";
import Button from "@paprika/button";
import PropTypes from "prop-types";
import { FooterContainerStyled } from "./Footer.styles";
import useListBox from "../../useListBox";
import applyOnChange from "../../helpers/applyOnChange";

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
  onClickAccept: null,
  onClickCancel: null,
  onClickClear: null,
  size: "small",
};

const Footer = React.forwardRef((props, ref) => {
  const [, dispatch] = useListBox();

  const {
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

    dispatch({
      type: useListBox.types.accept,
      payload: { onChangeFn: applyOnChange(props.onClickAccept, "listbox:footer:accept") },
    });
  };

  const handleClickCancel = event => {
    event.stopPropagation();
    const onChangeFn = props.onClickCancel
      ? applyOnChange(props.onClickCancel, "listbox:footer:cancel")
      : applyOnChange();

    dispatch({
      type: useListBox.types.cancel,
      payload: { onChangeFn },
    });
  };

  const handleClickClear = event => {
    event.stopPropagation();
    const onChangeFn = props.onClickClear ? applyOnChange(props.onClickClear, "listbox:footer:clear") : applyOnChange();

    dispatch({
      type: useListBox.types.clear,
      payload: {
        isPopoverOpen: true,
        onChangeFn,
      },
    });
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
