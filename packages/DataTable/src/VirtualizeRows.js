import React from "react";
import PropTypes from "prop-types";
import * as styled from "./VirtualizeRows.styles";

const propTypes = {
  index: PropTypes.number,
  gridLength: PropTypes.number.isRequired,
  gridRowHeight: PropTypes.number.isRequired,
  gridHeight: PropTypes.number.isRequired,
  gridWidth: PropTypes.number,
  gridRowsOffset: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  children: PropTypes.func.isRequired,
};

const defaultProps = {
  index: 0,
  gridWidth: null,
};

const VirtualizeRows = React.forwardRef((props, ref) => {
  const {
    data,
    index: $index,
    gridLength,
    gridRowHeight,
    gridHeight,
    gridWidth,
    children,
    gridRowsOffset,
    ...moreProps
  } = props;
  const [state, setState] = React.useState({ index: $index, top: 0 });
  const refElementToScroll = React.useRef(null);

  React.useImperativeHandle(ref, () => ({
    getScrollableElement: () => {
      return refElementToScroll.current;
    },
  }));

  // track scroll
  React.useEffect(() => {
    function handleScroll(event) {
      const top = event.target.scrollTop;
      const index = Math.floor(top / gridRowHeight);
      setState(() => ({ index, top }));
    }

    const $element = refElementToScroll.current;
    $element.addEventListener("scroll", handleScroll);
    return function cleanup() {
      $element.removeEventListener("scroll", handleScroll);
    };
  }, [gridRowHeight, setState, state.index]);

  /**
    function
    Calculates how many items can fit in a table depending its height.
  */
  const pageSize = React.useMemo(() => {
    if (gridRowHeight && gridHeight) {
      const page = Math.floor(gridHeight / gridRowHeight) + gridRowsOffset;
      console.log("page:", page);
      return page;
    }
    return null;
  }, [gridHeight, gridRowHeight, gridRowsOffset]);

  /**
    returns the number of items to render on the virtualize list depending
    of the height of the desire table.
  */
  const subsetToRender = React.useMemo(() => {
    if (!gridHeight) {
      return data;
    }

    const from = state.index;
    let to = state.index + pageSize;
    if (state.index + pageSize > gridLength) {
      to = gridLength;
    }

    return data.slice(from, to);
  }, [data, gridHeight, gridLength, pageSize, state.index]);

  const memoHeight = React.useMemo(() => {
    return gridLength * gridRowHeight;
  }, [gridLength, gridRowHeight]);

  const keys = React.useMemo(() => {
    return [...Array(pageSize).keys()].map(index => {
      return state.index + index;
    });
  }, [pageSize, state.index]);

  // need more a11y love https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Row_Role
  return (
    <styled.Virtualize
      width={gridWidth}
      height={gridHeight}
      rowHeight={gridRowHeight}
      data-pka-anchor="virtualize-rows-root"
      ref={refElementToScroll}
      {...moreProps}
      tabIndex="0"
    >
      <styled.VirtualizeContent role="grid" height={memoHeight}>
        <styled.VirtualizeRows role="rowgroup" top={state.top}>
          {children(subsetToRender, keys, { row: { role: "row" }, cell: { role: "cell" } })}
        </styled.VirtualizeRows>
      </styled.VirtualizeContent>
    </styled.Virtualize>
  );
});

export default VirtualizeRows;
VirtualizeRows.propTypes = propTypes;
VirtualizeRows.defaultProps = defaultProps;
