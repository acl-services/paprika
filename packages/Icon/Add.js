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
    {...props}
  >
    <title>{title}</title>
    <defs>
      <path
        d="M1.5 10.425h7.875a1.05 1.05 0 0 0 1.05-1.05V1.5h3.15v7.875a1.05 1.05 0 0 0 1.05 1.05H22.5v3.15h-7.875a1.05 1.05 0 0 0-1.05 1.05V22.5h-3.15v-7.875a1.05 1.05 0 0 0-1.05-1.05H1.5v-3.15z"
        id="Add_svg__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#Add_svg__a" fillRule="evenodd" />
  </svg>
);

export default SvgAdd;
