/* eslint-disable react/no-unused-prop-types */
import React from "react";
import PropTypes from "prop-types";

export default function InfiniteScroll() {
  return <></>;
}

const propTypes = {
  optionsOffset: PropTypes.number,
  onReachedOffset: PropTypes.func,
};

const defaultProps = {
  optionsOffset: 10,
  onReachedOffset: () => {},
};

InfiniteScroll.propTypes = propTypes;
InfiniteScroll.defaultProps = defaultProps;
InfiniteScroll.displayName = "ListBox.InfiniteScroll";
