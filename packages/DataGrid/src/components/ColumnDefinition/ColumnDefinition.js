import PropTypes from "prop-types";

export default function ColumnDefinition() {
  return null;
}

ColumnDefinition.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cell: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  isHidden: PropTypes.bool,
  isSticky: PropTypes.bool,
  width: PropTypes.number,
};

ColumnDefinition.defaultProps = {
  isHidden: false,
  isSticky: false,
  width: 80,
};

ColumnDefinition.displayName = "DataGrid.ColumnDefinition";
