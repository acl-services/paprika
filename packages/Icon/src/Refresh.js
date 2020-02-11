import React from "react";

const SvgRefresh = ({ title, ...props }) => (
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
      d="M17.931 6.069L15.15 8.85h6.3v-6.3l-2.035 2.035A10.425 10.425 0 0012 1.5C6.21 1.5 1.5 6.21 1.5 12h2.1c0-4.632 3.768-8.4 8.4-8.4 2.28 0 4.385.915 5.931 2.469zM6.07 17.93L8.85 15.15h-6.3v6.3l2.034-2.035A10.427 10.427 0 0012 22.5c5.79 0 10.5-4.71 10.5-10.5h-2.1c0 4.632-3.768 8.4-8.4 8.4a8.334 8.334 0 01-5.931-2.469z"
      fillRule="evenodd"
      fill="currentColor"
    />
  </svg>
);

export default SvgRefresh;
