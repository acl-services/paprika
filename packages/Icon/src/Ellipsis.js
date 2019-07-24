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
    <title>Ellipsis</title>

    <defs>
      <path
        d="M141,240 C141,267.6 118.6,290 91,290 C63.4,290 41,267.6 41,240 C41,212.4 63.4,190 91,190 C118.6,190 141,212.4 141,240 Z M290,240 C290,267.6 267.6,290 240,290 C212.4,290 190,267.6 190,240 C190,212.4 212.4,190 240,190 C267.6,190 290,212.4 290,240 Z M439,240 C439,267.6 416.6,290 389,290 C361.4,290 339,267.6 339,240 C339,212.4 361.4,190 389,190 C416.6,190 439,212.4 439,240 Z"
        id="Combined-Shape"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#ellipsis_svg__a" fillRule="evenodd" />
  </svg>
);

export default SvgEllipsis;
