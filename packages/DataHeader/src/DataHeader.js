import React from "react";
import PropTypes from "prop-types";
import * as sc from "./DataHeader.styles";

import types from "./types";

export default function DataHeader(props) {
  const { renderDropDownMenu, label, backgroundColor } = props;
  const refHeader = React.useRef(null);

  return (
    <sc.Header ref={refHeader} refHeader={refHeader} $backgroundColor={backgroundColor}>
      <sc.Label>{typeof label === "function" ? label() : label}</sc.Label>
      {renderDropDownMenu && typeof renderDropDownMenu === "function" ? renderDropDownMenu() : null}
    </sc.Header>
  );
}

DataHeader.types = types;
DataHeader.propTypes = {
  renderDropDownMenu: PropTypes.func,
  // type: PropTypes.oneOf(["numeric", "string"]),
  label: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  backgroundColor: PropTypes.string,
};

DataHeader.defaultProps = {
  // type: "string",
  renderDropDownMenu: null,
  backgroundColor: null,
};
