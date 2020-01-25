import PropTypes from "prop-types";

function customA11yTextPropTypeValidation(props, propName) {
  if (typeof props[propName] !== "function" && typeof props[propName] !== "string") {
    return new Error(`
      ${props[propName]} requires to be either function or string.
    `);
  }

  if ((propName === "cell" || propName === "header") && typeof props[propName] === "function") {
    const nameOfRenderProp = propName === "cell" ? "cellA11yText" : "headerA11yText";

    if (typeof props[nameOfRenderProp] === "undefined")
      return new Error(`Accessibility is important 😇: \n
        When using a render function as a value for the ${
          props[propName]
        } prop, you must provide an ${nameOfRenderProp} prop describing the cell content. Look on the ColumnDefinition with the following props: \n ${JSON.stringify(
        props,
        null,
        2
      )}.
      `);

    if (typeof props[nameOfRenderProp] !== "function")
      return new Error(`Accessibility is important 😇: \n
        The prop ${nameOfRenderProp} has to be a function returning a string. Look on the ColumnDefinition with the following props: \n ${JSON.stringify(
        props,
        null,
        2
      )}.
      `);
  }

  // with this validation we are sure that either we have a cell with a string value or we have an a11yText describing the value
}

export const propTypes = {
  cell: customA11yTextPropTypeValidation,
  header: customA11yTextPropTypeValidation,
  isSticky: PropTypes.bool,
  width: PropTypes.number,
  cellA11yText: PropTypes.func,
  headerA11yText: PropTypes.func,
  cellProps: PropTypes.func,
};

export const defaultProps = {
  isSticky: false,
  width: 80,
  cellA11yText: null,
  headerA11yText: null,
  cellProps: () => ({}),
};

export default function ColumnDefinition() {
  return null;
}

ColumnDefinition.propTypes = propTypes;
ColumnDefinition.defaultProps = defaultProps;
ColumnDefinition.displayName = "DataGrid.ColumnDefinition";
