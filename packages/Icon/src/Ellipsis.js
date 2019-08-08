import React from "react";

const SvgEllipsis = ({ title, ...props }) => (
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
    <title>{title}</title>

    <defs>
      <path
        d="M6,12 C6,13.656 4.656,15 3,15 C1.344,15 0,13.656 0,12 C0,10.344 1.344,9 3,9 C4.656,9 6,10.344 6,12 Z M15,12 C15,13.656 13.656,15 12,15 C10.344,15 9,13.656 9,12 C9,10.344 10.344,9 12,9 C13.656,9 15,10.344 15,12 Z M24,12 C24,13.656 22.656,15 21,15 C19.344,15 18,13.656 18,12 C18,10.344 19.344,9 21,9 C22.656,9 24,10.344 24,12 Z"
        id="ellipsis-svg__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#ellipsis-svg__a" fillRule="evenodd" />
  </svg>
);

export default SvgEllipsis;
