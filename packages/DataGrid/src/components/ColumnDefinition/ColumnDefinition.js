import PropTypes from "prop-types";

function customA11yTextPropTypeValidation(props, propName) {
  const nameOfRenderProp = propName === "cellA11yText" ? "cell" : "header";
  if (!(propName in props) && typeof props[nameOfRenderProp] === "function") {
    return new Error(
      `When using a render function as a value for the ${nameOfRenderProp} prop, you must provide an ${propName} prop describing the cell content`
    );
  }

  if (propName in props && typeof props[propName] !== "function") {
    return new Error(`${propName} props needs to be a function`);
  }

  // with this validation we are sure that either we have a cell with a string value or we have an a11yText describing the value
}

export default function ColumnDefinition() {
  return null;
}

ColumnDefinition.propTypes = {
  cell: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  isHidden: PropTypes.bool,
  isSticky: PropTypes.bool,
  width: PropTypes.number,
  cellA11yText: customA11yTextPropTypeValidation,
  headerA11yText: customA11yTextPropTypeValidation,
};

ColumnDefinition.defaultProps = {
  isHidden: false,
  isSticky: false,
  width: 80,
};

ColumnDefinition.displayName = "DataGrid.ColumnDefinition";
