import React from "react";
import PropTypes from "prop-types";
import Character from "@paprika/icon/lib/Character";
import Numeric from "@paprika/icon/lib/Number";
import DateTime from "@paprika/icon/lib/TimeAndDate";
import Clock from "@paprika/icon/lib/Clock";
import Date from "@paprika/icon/lib/Calendar";

import * as sc from "./DataHeader.styles";
import types from "./types";

export default function DataHeader(props) {
  const { renderActions, label, backgroundColor, color, type, icons, ...moreProps } = props;
  const refHeader = React.useRef(null);

  return (
    <sc.Header
      data-pka-anchor="DataHeader.Header"
      ref={refHeader}
      refHeader={refHeader}
      $color={color}
      $backgroundColor={backgroundColor}
      {...moreProps}
    >
      <sc.Info data-pka-anchor="data-header.Info">
        {icons && type && type in icons ? <sc.Icon data-pka-anchor="data-header.icon">{icons[type]}</sc.Icon> : null}
        <sc.Label data-pka-anchor="data-header.label">{typeof label === "function" ? label() : label}</sc.Label>
      </sc.Info>
      {renderActions && typeof renderActions === "function" ? renderActions() : null}
    </sc.Header>
  );
}

DataHeader.types = types;
DataHeader.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  renderActions: PropTypes.func,
  type: PropTypes.oneOf([types.type.TEXT, types.type.NUMERIC, types.type.DATE, types.type.DATE_TIME, types.type.TIME]),
  icons: PropTypes.object, // eslint-disable-line
};

DataHeader.defaultProps = {
  backgroundColor: null,
  renderActions: null,
  type: null,
  icons: null,
  color: null,
};

DataHeader.icons = {
  [types.type.TEXT]: <Character />,
  [types.type.NUMERIC]: <Numeric />,
  [types.type.DATE]: <Date />,
  [types.type.DATE_TIME]: <DateTime />,
  [types.type.TIME]: <Clock />,
};
