import PropTypes from "prop-types";
import { columnTypes } from "./types";

const columnShape = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(columnTypes)).isRequired,
  momentParsingFormat: PropTypes.string,
};

export default columnShape;
