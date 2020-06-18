import React from "react";
import Button from "@paprika/button";
import PropTypes from "prop-types";
import { ShirtSizes } from "@paprika/helpers/lib/enums";
import { FooterContainerStyled } from "./Footer.styles";
import useListBox from "../../useListBox";
import invokeOnChange from "../../helpers/invokeOnChange";

const propTypes = {
  /** If true it makes the accept button visible */
  isAcceptVisible: PropTypes.bool,

  /** If true it makes the cancel button visible */
  isCancelVisible: PropTypes.bool,

  /** If true it makes the clear button visible */
  isClearVisible: PropTypes.bool,

  /** If true it makes the footer disabled */
  isDisabled: PropTypes.bool,

  /** Sets what kind the accept button will be  */
  kindAccept: PropTypes.string,

  /** Sets what kind the cancel button will be  */
  kindCancel: PropTypes.string,

  /** Sets what kind the cancel button will be  */
  kindClear: PropTypes.string,

  /** Sets the label for the accept button */
  labelAccept: PropTypes.string,

  /** Sets the label for the cancel button */
  labelCancel: PropTypes.string,

  /** Sets the label for the clear button */
  labelClear: PropTypes.string,

  /** Callback to be executed when the accept button is clicked or activated by keyboard. */
  onClickAccept: PropTypes.func,

  /** Callback to be executed when the cancel button is clicked or activated by keyboard. */
  onClickCancel: PropTypes.func,

  /** Callback to be executed when the clear button is clicked or activated by keyboard. */
  onClickClear: PropTypes.func,

  /** Determines the size of the footer */
  size: PropTypes.string,
};

const defaultProps = {
  isAcceptVisible: true,
  isCancelVisible: true,
  isClearVisible: true,
  isDisabled: false,
  kindAccept: Button.Kinds.PRIMARY,
  kindCancel: Button.Kinds.MINOR,
  kindClear: Button.Kinds.MINOR,
  labelAccept: "Accept",
  labelCancel: "Cancel",
  labelClear: "Clear",
  onClickAccept: null,
  onClickCancel: null,
  onClickClear: null,
  size: ShirtSizes.SMALL,
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
    const onChangeFn = props.onClickClear
      ? invokeOnChange(props.onClickClear, "listbox:footer:clear")
      : invokeOnChange();

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
          <Button
            data-pka-anchor="footer-clear-button"
            isDisabled={isDisabled}
            kind={kindClear}
            size={size}
            onClick={handleClickClear}
          >
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

Footer.displayName = "ListBox.Footer";

export default Footer;
