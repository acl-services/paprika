import PropTypes from "prop-types";

const Item = ({ children }) => children;

Item.displayName = "Sortable.Item";
Item.propTypes = {
  children: PropTypes.node.isRequired,
  sortId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Item;
