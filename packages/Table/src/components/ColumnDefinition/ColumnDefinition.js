import PropTypes from "prop-types";

const propTypes = {
  cell: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

export default function ColumnDefinition() {
  return null;
}

ColumnDefinition.propTypes = propTypes;
ColumnDefinition.displayName = "Table.ColumnDefinition";
