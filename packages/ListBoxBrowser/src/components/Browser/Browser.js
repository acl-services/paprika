import PropTypes from "prop-types";

const propTypes = {
  // Marker component: ListBoxBrowser reads this propType off of Browser, which renders null
  // eslint-disable-next-line react/no-unused-prop-types
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
