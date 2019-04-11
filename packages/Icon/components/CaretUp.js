import React from "react";

const SvgCaretUp = props => (
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
      d="M261.975 174.844A30.019 30.019 0 0 0 239.75 165a30.019 30.019 0 0 0-22.225 9.844c-28.21 31.07-76.62 84.388-105.12 115.773a15.055 15.055 0 0 0-2.621 16.2 15.02 15.02 0 0 0 13.734 8.952h232.464a15.02 15.02 0 0 0 13.734-8.953 15.055 15.055 0 0 0-2.622-16.199L261.975 174.844z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgCaretUp;
