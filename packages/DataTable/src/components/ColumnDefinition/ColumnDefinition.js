import PropTypes from "prop-types";
import { columnTypes, sortDirections } from "../../constants";

export default function ColumnDefinition() {
  return null;
}

ColumnDefinition.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  momentParsingFormat: PropTypes.string,
  sortDirections: PropTypes.arrayOf(PropTypes.oneOf([sortDirections.ASCEND, sortDirections.DESCEND])),
  type: PropTypes.oneOf([columnTypes.TEXT, columnTypes.NUMBER, columnTypes.DATE]),
};

ColumnDefinition.defaultProps = {
  momentParsingFormat: null,
  sortDirections: [],
  type: null,
};

ColumnDefinition.displayName = "DataTable.ColumnDefinition";
