import React from "react";

const SvgEllipsis = ({ title, ...props }) => (
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
    {title ? <title>{title}</title> : null}
    <path
      d="M6 12a3.001 3.001 0 01-6 0 3.001 3.001 0 016 0zm9 0a3.001 3.001 0 01-6 0 3.001 3.001 0 016 0zm9 0a3.001 3.001 0 01-6 0 3.001 3.001 0 016 0z"
      fillRule="evenodd"
      fill="currentColor"
    />
  </svg>
);

export default SvgEllipsis;
