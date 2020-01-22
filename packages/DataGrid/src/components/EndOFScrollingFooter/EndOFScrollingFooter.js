import PropTypes from "prop-types";

const propTypes = {
  height: PropTypes.number,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  height: 80,
};

export default function EndOFScrollingFooter(props) {
  return props.children;
}

EndOFScrollingFooter.propTypes = propTypes;
EndOFScrollingFooter.defaultProps = defaultProps;
EndOFScrollingFooter.displayName = "DataGrid.EndOFScrollingFooter";
