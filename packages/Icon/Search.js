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
    {...props}
  >
    <title>{title}</title>
    <defs>
      <path
        d="M21.942 19.24l-3.779-3.779a9.052 9.052 0 0 0-7.607-13.96A9.05 9.05 0 0 0 1.5 10.553a9.051 9.051 0 0 0 9.056 9.054 8.986 8.986 0 0 0 4.906-1.448l3.779 3.778c.748.75 1.956.748 2.7 0a1.91 1.91 0 0 0 .001-2.698zM10.425 3.6c3.77 0 6.825 3.051 6.825 6.823 0 1.822-.71 3.536-2 4.824a6.776 6.776 0 0 1-4.826 1.999A6.821 6.821 0 0 1 3.6 10.423 6.82 6.82 0 0 1 10.425 3.6z"
        id="Search_svg__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#Search_svg__a" fillRule="evenodd" />
  </svg>
);

export default SvgSearch;
