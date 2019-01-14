import React from "react";
import { bool, number } from "prop-types";

const Gap = ({ space = 8, isHorizontal = false }) => (
  <div
    style={{
      clear: "both",
      display: "block",
      width: isHorizontal ? `${space}px` : "100%",
      height: isHorizontal ? "100%" : `${space}px`,
    }}
  />
);

Gap.propTypes = { space: number, isHorizontal: bool };

export default Gap;
