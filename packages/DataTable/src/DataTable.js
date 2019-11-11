/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import throttle from "lodash.throttle";
import { extractChildren } from "./helpers";
import ColumnDefinition from "./components/ColumnDefinition";
import * as styled from "./DataTable.styles";

const propTypes = {
  height: PropTypes.number,
  isPreparing: PropTypes.bool,
  columnsWidth: PropTypes.number,
  rowHeight: PropTypes.number,
  headerHeight: PropTypes.number,
  listSize: PropTypes.number,
};

const defaultProps = {
  height: 400,
  isPreparing: false,
  columnsWidth: null,
  rowHeight: null,
  headerHeight: null,
  listSize: null,
};

function getData(data) {
  return data.slice(0);
}

const DataTable = React.forwardRef((props, ref) => {
  const {
    data,
    children: childrenProps,
    height,
    isPreparing,
    columnsWidth,
    rowHeight,
    listSize,
    headerHeight,
    width,
  } = props;

  const refVirtualize = React.useRef(null);
  const [isScrollActive, setIsScrollActive] = React.useState(true);
  const [index, setIndex] = React.useState(0);
  const pageSize = React.useMemo(() => {
    console.log("pagesize");
    if (rowHeight && height) {
      return Math.ceil(height / rowHeight);
    }
    return null;
  }, [height, rowHeight]);

  const dataSubset = React.useMemo(() => {
    if (!pageSize) {
      return data;
    }

    const from = index;
    let to = index + pageSize;
    if (index + pageSize > listSize) {
      to = listSize - 1;
    }

    return getData(data).slice(from, to);
  }, [data, index, listSize, pageSize]);

  React.useEffect(() => {
    const handleThrottle = throttle(
      function handleScroll(event) {
        const top = event.target.scrollTop;
        const index = Math.ceil(top / rowHeight);
        setIndex(() => index);
        console.log(index);
      },
      200,
      { trailing: false }
    );

    const $element = refVirtualize.current;
    $element.addEventListener("scroll", handleThrottle);
    return function cleanup() {
      $element.removeEventListener("scroll", handleThrottle);
    };
  }, [rowHeight]);

  const { "DataTable.ColumnDefinition": ColumnsDefinition } = extractChildren(childrenProps, [
    "DataTable.ColumnDefinition",
  ]);

  function handleClickVirtualize() {
    setIsScrollActive(() => false);
  }

  function handleWheel() {
    if (!isScrollActive) {
      refVirtualize.current.focus();
      setIsScrollActive(() => true);
    }
  }

  return (
    <styled.Container ref={ref} tableWidth={width}>
      <styled.Table tabIndex="0" onWheel={handleWheel}>
        <styled.THead isPreparing={isPreparing}>
          <tr>
            {ColumnsDefinition.map((header, index) => {
              const { width: propsWidth, children } = header.props;

              return (
                <styled.Th
                  propsWidth={propsWidth}
                  calculatedWidth={columnsWidth && columnsWidth[index] ? columnsWidth[index] : null}
                  key={index}
                >
                  {children}
                </styled.Th>
              );
            })}
          </tr>
        </styled.THead>
        <styled.TBody height={height} isPreparing={isPreparing}>
          {dataSubset.map((row, index) => {
            return (
              <tr key={`tr_${index}`}>
                {row.map((cell, i) => {
                  return (
                    <styled.Td
                      propsWidth={ColumnsDefinition[i].props.width}
                      calculatedWidth={columnsWidth && columnsWidth[index] ? columnsWidth[index] : null}
                      calculatedHeight={rowHeight}
                      key={`td_${i}`}
                    >
                      {ColumnsDefinition[i].props.renderCell ? ColumnsDefinition[i].props.renderCell(cell) : cell}
                    </styled.Td>
                  );
                })}
              </tr>
            );
          })}
        </styled.TBody>
      </styled.Table>

      <styled.Virtualize
        headerHeight={headerHeight}
        height={height}
        data-pka-anchor="datatable-virtualize"
        ref={refVirtualize}
        isScrollActive={isScrollActive}
        onClick={handleClickVirtualize}
      >
        <styled.VirtualizeContent height={listSize * rowHeight} />
      </styled.Virtualize>
    </styled.Container>
  );
});

DataTable.prpoTypes = propTypes;
DataTable.defaultProps = defaultProps;
DataTable.ColumnDefinition = ColumnDefinition;
DataTable.types = { integer: "integer", string: "string", date: "date", object: "object" };

export default DataTable;
