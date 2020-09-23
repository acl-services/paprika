import PropTypes from "prop-types";
import Numeric from "./components/Numeric";
import types from "./types";

export default function FieldTypes(props) {
  return props.children;
}

FieldTypes.types = types;

FieldTypes.propTypes = {
  children: PropTypes.node.isRequired,
};

FieldTypes.Numeric = Numeric;
FieldTypes.Numeric.attributes = Numeric.attributes;
