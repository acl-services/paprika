import PropTypes from "prop-types";

const Item = ({ children }) => children;

Item.displayName = "Sortable.Item";
Item.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default Item;
