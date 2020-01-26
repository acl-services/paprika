import React from "react";
import RawButton from "@paprika/raw-button";
import PropTypes from "prop-types";
import Maximize from "@paprika/icon/lib/Maximize";
import ColumnDefinition from "../ColumnDefinition";

const propTypes = {
  onClick: PropTypes.func.isRequired,
  isActiveCell: PropTypes.bool.isRequired,
};

const Expand = React.memo(
  React.forwardRef((props, ref) => {
    const [opacity, setOpacity] = React.useState(0);
    const { onClick, isActiveCell, ...moreProps } = props;
    const handleClick = React.useCallback(() => {
      onClick({ ...moreProps });
    }, [moreProps, onClick]);

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
        <RawButton ref={ref} onClick={handleClick}>
          <Maximize />
        </RawButton>
      </div>
    );
  })
);

Expand.propTypes = propTypes;

export default function renderColumnExpand(props = {}) {
  /* eslint-disable react-hooks/rules-of-hooks */
  const refButton = React.useRef(null);
  /* eslint-enable react-hooks/rules-of-hooks */

  const { onClick = () => {} } = props; // eslint-disable-line

  return (
    <ColumnDefinition
      header={() => null}
      headerA11yText={() => "Expand Row"}
      cellA11yText={({ rowIndex }) => `expand row ${rowIndex}`}
      cell={propsCell => <Expand ref={refButton} onClick={onClick} {...propsCell} />}
      isSticky
      {...props}
      onClickCell={() => refButton.current.click()}
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
