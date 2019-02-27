import React from "react";
import Button from "@paprika/Button";
import PropTypes from "prop-types";
import { FooterContainerStyled } from "./Footer.styles";
import useStore from "../../store/useStore";

const propTypes = {
  hasFooter: PropTypes.bool,
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
  hasFooter: false,
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
  const [state] = useStore();

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
    hasFooter,
  } = props;

  if (hasFooter && state.isPopoverOpen) {
    return (
      <FooterContainerStyled>
        {isCancelVisible && <Button onClick={onClickCancel}>{labelCancel}</Button>}
        {isAcceptVisible && <Button onClick={onClickAccept}>{labelAccept}</Button>}
        {isClearVisible && <Button onClick={onClickClear}>{labelClear}</Button>}
      </FooterContainerStyled>
    );
  }

  return null;
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
