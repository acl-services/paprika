import React from "react";

const SvgSort = ({ title, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 7h-2v8h-2.542a.458.458 0 00-.419.297.534.534 0 00.08.537l3.204 3.84c.173.207.42.326.677.326a.883.883 0 00.677-.326l3.204-3.84a.534.534 0 00.08-.537.458.458 0 00-.419-.297H17V7zM8 4a.883.883 0 00-.677.326l-3.204 3.84a.534.534 0 00-.08.537c.073.18.238.297.419.297H7v8h2V9h2.542a.458.458 0 00.419-.297.534.534 0 00-.08-.537l-3.204-3.84A.883.883 0 008 4z"
      fill="#3F3D3C"
    />
  </svg>
);

export default SvgSort;
