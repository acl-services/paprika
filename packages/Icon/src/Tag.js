import React from "react";

const SvgTag = ({ title, ...props }) => (
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
        d="M6.75 8.85a2.1 2.1 0 110-4.2 2.1 2.1 0 010 4.2m15.442 4.508l-11.55-11.55A1.049 1.049 0 009.9 1.5H2.55c-.58 0-1.05.47-1.05 1.05V9.9c0 .278.111.546.308.742l11.55 11.55a1.047 1.047 0 001.484 0l7.35-7.35c.41-.41.41-1.074 0-1.484"
        id="Tag_svg__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#Tag_svg__a" fillRule="evenodd" />
  </svg>
);

export default SvgTag;
