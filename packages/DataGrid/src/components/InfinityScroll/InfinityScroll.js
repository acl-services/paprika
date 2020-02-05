import PropTypes from "prop-types";

const propTypes = {
  rowsOffset: PropTypes.number,
  onReached: PropTypes.func,
};

const defaultProps = {
  rowsOffset: 25,
  onReached: () => {},
};

export default function InfinityScroll() {
  return null;
}

InfinityScroll.propTypes = propTypes;
InfinityScroll.defaultProps = defaultProps;
InfinityScroll.displayName = "DataGrid.InfinityScroll";
