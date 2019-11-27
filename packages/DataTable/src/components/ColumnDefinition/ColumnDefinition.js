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
  canHide: PropTypes.bool,
  isHidden: PropTypes.bool,
};

ColumnDefinition.defaultProps = {
  momentParsingFormat: null,
  sortDirections: [],
  type: null,
  canHide: true,
  isHidden: false,
};

ColumnDefinition.displayName = "DataTable.ColumnDefinition";
