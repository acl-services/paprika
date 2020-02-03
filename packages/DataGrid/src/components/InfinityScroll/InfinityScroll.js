import PropTypes from "prop-types";

const propTypes = {
  onReachedPageSize: PropTypes.func,
  pageSize: PropTypes.number.isRequired,
};

const defaultProps = {
  onReachedPageSize: () => {},
};

export default function InfinityScroll() {
  return null;
}

InfinityScroll.propTypes = propTypes;
InfinityScroll.defaultProps = defaultProps;
InfinityScroll.displayName = "DataGrid.InfinityScroll";
