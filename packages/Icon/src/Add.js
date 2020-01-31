import React from "react";

const SvgAdd = ({ title, ...props }) => (
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
      d="M1.5 10.425h7.875a1.05 1.05 0 001.05-1.05V1.5h3.15v7.875a1.05 1.05 0 001.05 1.05H22.5v3.15h-7.875a1.05 1.05 0 00-1.05 1.05V22.5h-3.15v-7.875a1.05 1.05 0 00-1.05-1.05H1.5v-3.15z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgAdd;
