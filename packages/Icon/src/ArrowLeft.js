import React from "react";

const SvgArrowLeft = ({ title, ...props }) => (
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
      d="M6.707 10.514c-.82.82-.82 2.151 0 2.972l9.014 9.014 2.229-2.229-8.272-8.27 8.272-8.272L15.721 1.5l-9.014 9.014z"
      fillRule="evenodd"
      fill="currentColor"
    />
  </svg>
);

export default SvgArrowLeft;
