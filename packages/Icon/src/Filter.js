import React from "react";

const SvgFilter = ({ title, ...props }) => (
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
      d="M2.75 8.25v-2.5h18.5v2.5H2.75zm11.5 10h-4.5v-2.5h4.5v2.5zm-8.5-5v-2.5h12.5v2.5H5.75z"
      fill="#3F3D3C"
    />
  </svg>
);

export default SvgFilter;
