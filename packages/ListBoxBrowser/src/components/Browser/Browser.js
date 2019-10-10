import PropTypes from "prop-types";

const propTypes = {
  isLoading: PropTypes.bool,
};
const defaultProps = {
  isLoading: false,
};

export default function Browser() {
  return null;
}

Browser.propTypes = propTypes;
Browser.defaultProps = defaultProps;
Browser.displayName = "ListBoxBrowser.Browser";
