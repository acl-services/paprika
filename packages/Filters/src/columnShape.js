import PropTypes from "prop-types";

const columnShape = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  label: PropTypes.string.isRequired,
};

export default columnShape;
