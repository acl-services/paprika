import React from "react";

const SvgInfoCircle = ({ title, ...props }) => (
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
    <path
      d="M15.15 17.25h-6.3v-2.1h2.1V12H9.9V9.9H12c.58 0 1.05.47 1.05 1.05v4.2h2.1v2.1zM12 6.488a1.313 1.313 0 11-.001 2.625A1.313 1.313 0 0112 6.488zM12 1.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"
      fillRule="evenodd"
      fill="currentColor"
    />
  </svg>
);

export default SvgInfoCircle;
