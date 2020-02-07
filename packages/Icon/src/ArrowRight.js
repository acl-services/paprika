import React from "react";

const SvgArrowRight = ({ title, ...props }) => (
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
      d="M17.293 13.486c.82-.82.82-2.151 0-2.972L8.279 1.5 6.05 3.729l8.272 8.27-8.272 8.272L8.279 22.5l9.014-9.014z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgArrowRight;
