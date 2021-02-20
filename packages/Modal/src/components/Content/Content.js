import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Content.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Content = props => {
  const { children, ...moreProps } = props;
  return (
    <sc.ContentWrapper role="region" tabIndex="0">
      <sc.Content {...moreProps}>{children}</sc.Content>
    </sc.ContentWrapper>
  );
};

Content.propTypes = propTypes;
Content.displayName = "Modal.Content";

export default Content;
