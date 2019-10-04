import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { spacer } from "@paprika/stylers/lib/helpers";
import tokens from "@paprika/tokens/lib/tokens";

const InnerWrapper = styled.div`
  margin: ${spacer(2)};
  padding: ${spacer(2)};
  background-color: ${tokens.color.white};
  border: 1px solid ${tokens.border.color};
  border-radius: 3px;
  box-shadow: ${tokens.shadow};
`;

const Content = ({ children, ...props }) => (
  <div {...props}>
    <InnerWrapper>{children}</InnerWrapper>
  </div>
);

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
Content.defaultProps = {
  children: null,
  className: null,
};
Content.componentType = "Takeover.Content";

export default Content;
