import PropTypes from "prop-types";

function customA11yTextPropTypeValidation(props, propName) {
  const nameOfRenderProp = propName === "cellA11yText" ? "cell" : "header";

  if (typeof props[nameOfRenderProp] === "string") return;

  if (!(propName in props) && typeof props[nameOfRenderProp] === "function") {
    return new Error(
      `When using a render function as a value for the ${nameOfRenderProp} prop, you must provide an ${propName} prop describing the cell content`
    );
  }
  // with this validation we are sure that either we have a cell with a string value or we have an a11yText describing the value
}

export default function ColumnDefinition() {
  return null;
}

ColumnDefinition.propTypes = {
  cell: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  isSticky: PropTypes.bool,
  width: PropTypes.number,
  cellA11yText: customA11yTextPropTypeValidation,
  headerA11yText: customA11yTextPropTypeValidation,
  cellStyle: PropTypes.shape({}),
};

ColumnDefinition.defaultProps = {
  isSticky: false,
  width: 80,
  cellA11yText: null,
  headerA11yText: null,
  cellStyle: {},
};

ColumnDefinition.displayName = "DataGrid.ColumnDefinition";
