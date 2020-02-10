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
    data-pka-anchor="icon"
    focusable={false}
    {...props}
  >
    {title ? <title>{title}</title> : null}
    <path fill="currentColor" shapeRendering="crispEdges" d="M6 10h12v4H6z" />
  </svg>
);

export default SvgDash;
