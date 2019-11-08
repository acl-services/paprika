import React from "react";
import PropTypes from "prop-types";

import extraPanelStyles from "./ExtraPanel.styles";

const propTypes = {
  ariaExtraPanelId: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  ariaExtraPanelId: null,
};

function ExtraPanel(props) {
  const { children, ariaExtraPanelId, ...moreProps } = props;

  return (
    <div id={ariaExtraPanelId} css={extraPanelStyles} data-pka-anchor="formElement.extrapanel" {...moreProps}>
      {children}
    </div>
  );
}

ExtraPanel.displayName = "FormElement.ExtraPanel";

ExtraPanel.propTypes = propTypes;
ExtraPanel.defaultProps = defaultProps;

export default ExtraPanel;
