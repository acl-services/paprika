import React from "react";
import PropTypes from "prop-types";
import Maximize from "@paprika/icon/lib/Maximize";
import ColumnDefinition from "../ColumnDefinition";

const propTypes = {
  attrs: PropTypes.shape({}),
  isActiveCell: PropTypes.bool,
  isActiveRow: PropTypes.bool,
};

const defaultProps = {
  attrs: {},
  isActiveCell: false,
  isActiveRow: false,
};

function Expand(props) {
  const { attrs, isActiveCell, isActiveRow } = props;
  const [opacity, setOpacity] = React.useState(0);

  function show() {
    setOpacity(() => 1);
  }

  function hide() {
    setOpacity(() => 0);
  }

  return (
    <div
      style={{ opacity: opacity || isActiveCell || isActiveRow ? 1 : 0 }}
      css={`
        cursor: pointer;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
      onMouseOver={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      {...attrs}
    >
      <div>
        <Maximize />
      </div>
    </div>
  );
}

Expand.propTypes = propTypes;
Expand.defaultProps = defaultProps;

export default function renderColumnExpand(options = {}) {
  const { onClick = null } = options;

  return (
    <ColumnDefinition
      header={() => null}
      headerA11yText={() => "Expand Row"}
      cellA11yText={({ rowIndex }) => `expand row ${rowIndex}`}
      cell={propsCell => <Expand {...propsCell} />}
      isSticky
      {...options}
      onClick={onClick}
      width={26}
      cellProps={() => ({
        style: {
          padding: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "-1px 0px 0px 0px white",
          cursor: "pointer",
        },
      })}
    />
  );
}
