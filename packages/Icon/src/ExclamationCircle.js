import React from "react";

const SvgExclamationCircle = ({ title, ...props }) => (
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
        d="M12 17.512a1.313 1.313 0 11.001-2.625A1.313 1.313 0 0112 17.512zM10.95 5.7h2.1v7.35h-2.1V5.7zM12 1.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"
        id="Exclamation-Circle_svg__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#Exclamation-Circle_svg__a" fillRule="evenodd" />
  </svg>
);

export default SvgExclamationCircle;
