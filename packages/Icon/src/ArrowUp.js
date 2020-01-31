import React from "react";

const SvgArrowUp = ({ title, ...props }) => (
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
      d="M10.514 6.707c.82-.82 2.151-.82 2.972 0l9.014 9.014-2.229 2.229-8.27-8.272-8.272 8.272L1.5 15.721l9.014-9.014z"
      fillRule="evenodd"
      fill="currentColor"
    />
  </svg>
);

export default SvgArrowUp;
