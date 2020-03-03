import React from "react";
import PropTypes from "prop-types";

export default function Basement(props) {
  return props.children;
}
Basement.displayName = "DataGrid.Basement";

const propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number.isRequired,
};

export const End = React.forwardRef((props, ref) => {
  const { width } = props;
  const [isVisible, setIsVisible] = React.useState(false);

  React.useImperativeHandle(ref, () => {
    return {
      onScrollBarReachedBottom(value) {
        setIsVisible(() => value);
      },
    };
  });
  return isVisible ? <div style={{ width: `${width}px`, boxModel: "border-box" }}>{props.children}</div> : null;
});

End.propTypes = propTypes;
