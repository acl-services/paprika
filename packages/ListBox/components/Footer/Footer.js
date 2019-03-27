import React from "react";
import Button from "@paprika/button";
import PropTypes from "prop-types";
import { FooterContainerStyled } from "./Footer.styles";
import useListBox from "../../store/useListBox";

const propTypes = {
  isAcceptVisible: PropTypes.bool,
  isCancelVisible: PropTypes.bool,
  isClearVisible: PropTypes.bool,
  labelAccept: PropTypes.string,
  labelCancel: PropTypes.string,
  labelClear: PropTypes.string,
  onClickAccept: PropTypes.func,
  onClickCancel: PropTypes.func,
  onClickClear: PropTypes.func,
};

const defaultProps = {
  isAcceptVisible: true,
  isCancelVisible: true,
  isClearVisible: true,
  labelAccept: "Accept",
  labelCancel: "Cancel",
  labelClear: "Clear",
  onClickAccept: () => {},
  onClickCancel: () => {},
  onClickClear: () => {},
};

export default function Footer(props) {
  const [state] = useListBox();

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
  } = props;

  if (state.isPopoverOpen) {
    return (
      <FooterContainerStyled>
        {isCancelVisible && <Button onClick={onClickCancel}>{labelCancel}</Button>}
        {isAcceptVisible && (
          <Button kind="primary" onClick={onClickAccept}>
            {labelAccept}
          </Button>
        )}
        {isClearVisible && <Button onClick={onClickClear}>{labelClear}</Button>}
      </FooterContainerStyled>
    );
  }

  return null;
}

Footer.componentType = "ListBox.Footer";
Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
