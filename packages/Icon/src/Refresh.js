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
    focusable={false}
    {...props}
  >
    {title ? <title>{title}</title> : null}
    <defs>
      <path
        d="M6.069 6.069L8.85 8.85h-6.3v-6.3l2.035 2.035A10.425 10.425 0 0112 1.5c5.79 0 10.5 4.71 10.5 10.5h-2.1c0-4.632-3.768-8.4-8.4-8.4-2.28 0-4.385.915-5.931 2.469zM17.93 17.93L15.15 15.15h6.3v6.3l-2.034-2.035A10.427 10.427 0 0112 22.5C6.21 22.5 1.5 17.79 1.5 12h2.1c0 4.632 3.768 8.4 8.4 8.4a8.334 8.334 0 005.931-2.469z"
        id="refresh_svg__a"
      />
    </defs>
    <use fill="currentColor" transform="matrix(-1 0 0 1 24 0)" xlinkHref="#refresh_svg__a" fillRule="evenodd" />
  </svg>
);

export default SvgRefresh;
