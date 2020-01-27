import React from "react";
import PropTypes from "prop-types";
import Maximize from "@paprika/icon/lib/Maximize";
import ColumnDefinition from "../ColumnDefinition";

const propTypes = {
  isActiveCell: PropTypes.bool,
};

const defaultProps = {
  isActiveCell: false,
};

const Expand = React.memo(props => {
  const [opacity, setOpacity] = React.useState(0);
  const { isActiveCell } = props;

  function show() {
    setOpacity(() => 1);
  }

  function hide() {
    setOpacity(() => 0);
  }

  return (
    <div
      style={{ opacity: opacity || isActiveCell ? 1 : 0, width: "100%", height: "100%" }}
      onMouseOver={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      <Maximize />
    </div>
  );
});

Expand.propTypes = propTypes;
Expand.defaultProps = defaultProps;

export default function renderColumnExpand(props = {}) {
  const { onClick = () => {} } = props; // eslint-disable-line

  return (
    <ColumnDefinition
      header={() => null}
      headerA11yText={() => "Expand Row"}
      cellA11yText={({ rowIndex }) => `expand row ${rowIndex}`}
      cell={propsCell => <Expand {...propsCell} />}
      isSticky
      {...props}
      onClick={({ row }) => {
        console.log("row:", row);
      }}
      width={26}
      cellProps={() => ({
        style: {
          display: "flex",
          alignItem: "center",
          boxShadow: "-1px 0px 0px 0px rgba(255,255,255,1)",
          padding: "4px",
          paddingTop: "9px",
          paddingBottom: "9px",
        },
      })}
    />
  );
}
