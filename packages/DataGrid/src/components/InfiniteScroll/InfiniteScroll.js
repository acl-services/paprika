/* eslint-disable react/no-unused-prop-types */
import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  rowsOffset: PropTypes.number,
  onReachedOffset: PropTypes.func,
};

const defaultProps = {
  rowsOffset: 25,
  onReachedOffset: () => {},
};

export default function InfiniteScroll() {
  return <></>;
}

InfiniteScroll.propTypes = propTypes;
InfiniteScroll.defaultProps = defaultProps;
InfiniteScroll.displayName = "DataGrid.InfiniteScroll";
