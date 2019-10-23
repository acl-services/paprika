import React from "react";

const SvgDash = ({ title, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    css={`
      color: ${props.color};
      width: ${props.size};
      height: ${props.size};
      vertical-align: text-top;
    `}
    focusable={false}
    {...props}
  >
    <title>{title}</title>
    <g>
      <rect x="6" y="11" width="12" height="2" />
    </g>
  </svg>
);

export default SvgDash;
