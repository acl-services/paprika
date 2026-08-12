import PropTypes from "prop-types";

const propTypes = {
  // Marker component: ListBoxBrowser reads this propType off of Root, which renders null

  isLoading: PropTypes.bool,
};
const defaultProps = {
  isLoading: false,
};

export default function Root() {
  return null;
}

Root.propTypes = propTypes;
Root.defaultProps = defaultProps;
Root.displayName = "ListBoxBrowser.Root";
