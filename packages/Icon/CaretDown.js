import React from "react";

const SvgCaretDown = ({ title, ...props }) => (
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
        d="M8.71 10.87a1.501 1.501 0 0 0 0 2.222l5.79 5.256a.753.753 0 0 0 1.257-.556V6.17a.751.751 0 0 0-1.258-.555c-1.57 1.424-4.235 3.845-5.789 5.256z"
        id="caret-down_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="currentColor" transform="scale(1 -1) rotate(90 23.968 0)" xlinkHref="#caret-down_svg__a" />
    </g>
  </svg>
);

export default SvgCaretDown;
