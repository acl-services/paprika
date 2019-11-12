import React from "react";
import PropTypes from "prop-types";
import * as styled from "./VirtualizeRows.styles";

const propTypes = {
  index: PropTypes.number,
  gridLength: PropTypes.number.isRequired,
  gridRowHeight: PropTypes.number.isRequired,
  gridHeight: PropTypes.number.isRequired,
  gridWidth: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  children: PropTypes.func.isRequired,
};

const defaultProps = {
  index: 0,
  gridWidth: null,
};

export default function VirtualizeRows(props) {
  const { index: $index, gridLength, gridRowHeight, gridHeight, gridWidth, data, children, ...moreProps } = props;
  const [state, setState] = React.useState({ index: $index, top: 0 });
  const refElementToScroll = React.useRef(null);
  // track scroll
  React.useEffect(() => {
    function handleScroll(event) {
      const top = event.target.scrollTop;
      const index = Math.ceil(top / gridRowHeight);
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
      return Math.ceil(gridHeight / gridRowHeight);
    }
    return null;
  }, [gridHeight, gridRowHeight]);

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
      data-pka-anchor="virtualize-rows-root"
      ref={refElementToScroll}
      {...moreProps}
    >
      <styled.VirtualizeContent role="grid" height={memoHeight}>
        <styled.VirualizeRows role="rowgroup" top={state.top}>
          {children(subsetToRender, keys, { row: { role: "row" }, cell: { role: "cell" } })}
        </styled.VirualizeRows>
      </styled.VirtualizeContent>
    </styled.Virtualize>
  );
}

VirtualizeRows.propTypes = propTypes;
VirtualizeRows.defaultProps = defaultProps;
