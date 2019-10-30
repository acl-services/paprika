import React from "react";

const SvgTimesCircle = ({ title, ...props }) => (
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
        d="M12 1.5C6.218 1.5 1.5 6.235 1.5 12S6.218 22.5 12 22.5 22.5 17.782 22.5 12 17.765 1.5 12 1.5zm-.755 7.532a1.05 1.05 0 001.481.004l2.624-2.598 2.228 2.228-2.617 2.591a1.05 1.05 0 00-.003 1.489l2.604 2.604-2.228 2.227-2.604-2.604a1.05 1.05 0 00-1.489.004l-2.575 2.6-2.228-2.227 2.582-2.608a1.05 1.05 0 00-.003-1.482L6.423 8.666 8.65 6.438l2.595 2.594z"
        id="Times-Circle_svg__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#Times-Circle_svg__a" fillRule="evenodd" />
  </svg>
);

export default SvgTimesCircle;
