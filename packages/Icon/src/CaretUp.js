import React from "react";

const SvgCaretUp = ({ title, ...props }) => (
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
        d="M8.71 10.908a1.501 1.501 0 000 2.222l5.79 5.256a.753.753 0 001.257-.555V6.208a.751.751 0 00-1.258-.556L8.71 10.908z"
        id="caret-up_svg__a"
      />
    </defs>
    <use fill="currentColor" transform="rotate(90 11.988 12.02)" xlinkHref="#caret-up_svg__a" fillRule="evenodd" />
  </svg>
);

export default SvgCaretUp;
