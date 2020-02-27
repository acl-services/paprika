import PropTypes from "prop-types";

const propTypes = {
  rowsOffset: PropTypes.number,
  onReached: PropTypes.func,
};

const defaultProps = {
  rowsOffset: 25,
  onReached: () => {},
};

export default function InfiniteScroll() {
  return null;
}

InfiniteScroll.propTypes = propTypes;
InfiniteScroll.defaultProps = defaultProps;
InfiniteScroll.displayName = "DataGrid.InfiniteScroll";
