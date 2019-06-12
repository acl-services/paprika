import React from "react";
import Button from "@paprika/button";
import PropTypes from "prop-types";
import { FooterContainerStyled } from "./Footer.styles";
import useListBox from "../../useListBox";
import invokeOnChange from "../../helpers/invokeOnChange";

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

export function FooterComponent(props, ref) {
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
      payload: { onChangeFn: invokeOnChange(props.onClickAccept, "listbox:footer:accept") },
    });
  };

  const handleClickCancel = event => {
    event.stopPropagation();
    const onChangeFn = props.onClickCancel
      ? invokeOnChange(props.onClickCancel, "listbox:footer:cancel")
      : invokeOnChange();

    dispatch({
      type: useListBox.types.cancel,
      payload: { onChangeFn },
    });
  };

  const handleClickClear = event => {
    event.stopPropagation();
    const onChangeFn = props.onClickClear ? invokeOnChange(props.onClickClear, "listbox:footer:clear") : invokeOnChange();

    dispatch({
      type: useListBox.types.clear,
      payload: {
        isOpen: true,
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
}

const Footer = React.forwardRef(FooterComponent);

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

// forwardRef component are struggling with react-docgen
// https://github.com/pedronauck/docz/issues/334 once we move to Storybook doc we might be able to
// remove this
FooterComponent.propTypes = propTypes;
FooterComponent.defaultProps = defaultProps;

Footer.componentType = "ListBox.Footer";

export default Footer;
