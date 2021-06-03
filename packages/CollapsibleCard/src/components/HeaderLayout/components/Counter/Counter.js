import React from "react";
import PropTypes from "prop-types";
import Counter from "@paprika/counter";
import * as sc from "./Counter.styles";

export default function HeaderLayoutCounter(props) {
  const { quantity } = props;
  return (
    <sc.Counter>
      <Counter quantity={quantity} />
    </sc.Counter>
  );
}

const propTypes = {
  quantity: PropTypes.number.isRequired,
};

HeaderLayoutCounter.propTypes = propTypes;
HeaderLayoutCounter.displayName = "HeaderLayout.Counter";
