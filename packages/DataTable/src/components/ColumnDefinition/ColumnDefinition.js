import PropTypes from "prop-types";
import { columnTypes } from "../../constants";

export default function ColumnDefinition() {
  return null;
}

ColumnDefinition.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  momentParsingFormat: PropTypes.string,
  canFilter: PropTypes.bool,
  canSort: PropTypes.bool,
  type: PropTypes.oneOf([columnTypes.TEXT, columnTypes.NUMBER, columnTypes.DATE]),
  canHide: PropTypes.bool,
  isHidden: PropTypes.bool,
  defaultIsHidden: PropTypes.bool,
};

ColumnDefinition.defaultProps = {
  momentParsingFormat: null,
  canFilter: true,
  canSort: true,
  type: columnTypes.TEXT,
  canHide: true,
  isHidden: false,
  defaultIsHidden: false,
};

ColumnDefinition.displayName = "DataTable.ColumnDefinition";
