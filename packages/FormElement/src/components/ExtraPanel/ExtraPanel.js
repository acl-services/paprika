import React from "react";
import PropTypes from "prop-types";

import extraPanelStyles from "./ExtraPanel.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
};

function ExtraPanel(props) {
  const { children, ...moreProps } = props;

  return (
    <div css={extraPanelStyles} data-pka-anchor="formElement.extrapanel" {...moreProps}>
      {children}
    </div>
  );
}

ExtraPanel.displayName = "FormElement.ExtraPanel";

ExtraPanel.propTypes = propTypes;

export default ExtraPanel;
