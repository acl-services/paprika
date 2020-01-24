import React from "react";

const SvgSearch = ({ title, ...props }) => (
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
      d="M21.942 19.24l-3.779-3.779a9.052 9.052 0 00-7.607-13.96A9.05 9.05 0 001.5 10.553a9.051 9.051 0 009.056 9.054 8.986 8.986 0 004.906-1.448l3.779 3.778c.748.75 1.956.748 2.7 0a1.91 1.91 0 00.001-2.698zM10.425 3.6c3.77 0 6.825 3.051 6.825 6.823 0 1.822-.71 3.536-2 4.824a6.776 6.776 0 01-4.826 1.999A6.821 6.821 0 013.6 10.423 6.82 6.82 0 0110.425 3.6z"
      fillRule="evenodd"
      fill="currentColor"
    />
  </svg>
);

export default SvgSearch;
