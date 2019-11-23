import PropTypes from "prop-types";
import moment from "moment";

export default function Date(props) {
  const { text, format } = props;

  return moment(text, format).toString();
}

Date.propTypes = {
  format: PropTypes.string,
};

Date.defaultProps = {
  format: "MM/DD/YYYY",
};
