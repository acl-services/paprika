import React from "react";

const SvgTimes = props => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 480 480"
    css={`
      color: ${props.color};
      width: ${props.size};
      height: ${props.size};
      vertical-align: text-top;
    `}
    {...props}
  >
    <path
      d="M254.856 180.576L405.43 30 450 74.568 299.424 225.144c-8.204 8.204-8.204 21.508 0 29.712L450 405.432 405.43 450 254.856 299.424c-8.206-8.204-21.508-8.204-29.712 0A9757549.724 9757549.724 0 0 0 74.568 450L30 405.432l150.574-150.576c8.206-8.204 8.206-21.508 0-29.712C139.944 184.515 30 74.568 30 74.568L74.568 30s109.945 109.947 150.576 150.576c8.204 8.204 21.506 8.204 29.712 0z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgTimes;
