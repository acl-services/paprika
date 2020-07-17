import PropTypes from "prop-types";

function customA11yTextPropTypeValidation(props, propName) {
  if (typeof props[propName] !== "function" && typeof props[propName] !== "string") {
    return new Error(`
      The prop "${propName}" is required to be either function or string; "${typeof props[propName]}" given.
    `);
  }

  if ((propName === "cell" || propName === "header") && typeof props[propName] === "function") {
    const nameOfRenderProp = propName === "cell" ? "cellA11yText" : "headerA11yText";

    if (typeof props[nameOfRenderProp] === "undefined")
      return new Error(`Accessibility is important 😇: \n
        When using a render function as a value for the ${
          props[propName]
        } prop, you must provide an ${nameOfRenderProp} prop describing the cell content. Look at the ColumnDefinition with the following props: \n ${JSON.stringify(
        props,
        null,
        2
      )}.
      `);

    if (typeof props[nameOfRenderProp] !== "function")
      return new Error(`Accessibility is important 😇: \n
        The prop ${nameOfRenderProp} has to be a function returning a string. Look at the ColumnDefinition with the following props: \n ${JSON.stringify(
        props,
        null,
        2
      )}.
      `);
  }

  // with this validation we are sure that either we have a cell with a string value or we have an a11yText describing the value
}

const propTypes = {
  canGrow: PropTypes.bool,
  cell: customA11yTextPropTypeValidation,
  cellA11yText: PropTypes.func,
  cellProps: PropTypes.func,
  cellPropsResetCSS: PropTypes.bool,
  header: customA11yTextPropTypeValidation,
  headerA11yText: PropTypes.func,
  headerProps: PropTypes.func,
  isSticky: PropTypes.bool,
  onClick: PropTypes.func,
  onPressEnter: PropTypes.func,
  onPressShiftSpaceBar: PropTypes.func,
  onPressSpaceBar: PropTypes.func,
  width: PropTypes.number,
};

export const defaultProps = {
  canGrow: false,
  cellA11yText: null,
  cellProps: null,
  cellPropsResetCSS: false,
  headerA11yText: null,
  headerProps: null,
  isSticky: false,
  onClick: () => {},
  onPressEnter: null,
  onPressShiftSpaceBar: null,
  onPressSpaceBar: null,
  width: 182,
};

export default function ColumnDefinition() {
  return null;
}

ColumnDefinition.propTypes = propTypes;
ColumnDefinition.defaultProps = defaultProps;
ColumnDefinition.displayName = "DataGrid.ColumnDefinition";
