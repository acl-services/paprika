import React from "react";

const SvgUnlink = ({ title, ...props }) => (
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
      d="M8.066 9.144l2.176 2.175-3.528 3.527 2.44 2.44 3.528-3.527 2.175 2.175-4.615 4.615a1.534 1.534 0 01-2.059.105l-.117-.105-1.22-1.22-3.066 3.066-2.175-2.176 3.065-3.066-1.219-1.219a1.537 1.537 0 01-.106-2.058l.106-.117 4.615-4.615zm12.154-7.54l2.176 2.175-3.066 3.067 1.219 1.22c.564.563.599 1.454.106 2.06l-.106.116-4.615 4.615-2.176-2.175 3.528-3.528-2.44-2.44-3.528 3.526-2.175-2.175 4.615-4.615a1.54 1.54 0 012.059-.105l.117.105 1.22 1.22 3.066-3.066z"
      fillRule="evenodd"
      fill="currentColor"
    />
  </svg>
);

export default SvgUnlink;
