import React from "react";
import PropTypes from "prop-types";
import { Wrapper, ChildWrapper } from "./Footer.styles";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const Footer = props => {
  const { children, ...moreProps } = props;

  return (
    <Wrapper {...moreProps}>
      {React.Children.map(children, child => (
        <ChildWrapper key={child.key}>{child}</ChildWrapper>
      ))}
    </Wrapper>
  );
};

Footer.displayName = "Modal.Footer";
Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
