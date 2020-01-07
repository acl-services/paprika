import PropTypes from "prop-types";
import { columnTypes } from "../../constants";

export default function ColumnDefinition() {
  return null;
}

ColumnDefinition.propTypes = {
  canHide: PropTypes.bool,
  canSort: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isHidden: PropTypes.bool,
  isSticky: PropTypes.bool,
  momentParsingFormat: PropTypes.string,
  type: PropTypes.oneOf([columnTypes.TEXT, columnTypes.NUMBER, columnTypes.DATE]),
};

ColumnDefinition.defaultProps = {
  canHide: true,
  canSort: true,
  isHidden: false,
  isSticky: false,
  momentParsingFormat: null,
  type: null,
};

ColumnDefinition.displayName = "DataTable.ColumnDefinition";
