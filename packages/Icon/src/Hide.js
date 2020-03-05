import React from "react";

const SvgHide = ({ title, ...props }) => (
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
      d="M5.224 17.362l-2.416 2.416 1.414 1.414 2.794-2.794A11.753 11.753 0 0012 19.5c5 0 9.27-3.11 11-7.5a11.888 11.888 0 00-4.224-5.362l2.416-2.416-1.414-1.414L16.984 5.6l-1.521 1.522-2.169 2.169-4.002 4.002-2.638 2.637-1.43 1.43zm3.312-.484A9.878 9.878 0 0012 17.5c3.8 0 7.17-2.13 8.82-5.5a9.808 9.808 0 00-3.476-3.93l-2.636 2.636c.187.391.292.83.292 1.294 0 1.66-1.34 3-3 3-.464 0-.903-.105-1.294-.292l-2.17 2.17zM12 6.5c.4 0 .797.024 1.187.07l1.712-1.711A11.82 11.82 0 0012 4.5C7 4.5 2.73 7.61 1 12a11.873 11.873 0 002.685 4.073l1.404-1.405A9.883 9.883 0 013.18 12 9.77 9.77 0 0112 6.5z"
      fill="currentColor"
    />
  </svg>
);

export default SvgHide;
