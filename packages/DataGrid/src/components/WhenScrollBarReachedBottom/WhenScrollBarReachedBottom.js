import React from "react";
import PropTypes from "prop-types";

export default function WhenScrollBarReachedBottom(props) {
  return props.children;
}
WhenScrollBarReachedBottom.displayName = "DataGrid.WhenScrollBarReachedBottom";

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
