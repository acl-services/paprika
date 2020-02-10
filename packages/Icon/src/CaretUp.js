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
    data-pka-anchor="icon"
    focusable={false}
    {...props}
  >
    {title ? <title>{title}</title> : null}
    <path
      d="M13.099 8.742a1.501 1.501 0 00-2.223 0c-1.41 1.554-3.83 4.22-5.256 5.789a.753.753 0 00.556 1.257h11.623a.751.751 0 00.556-1.257l-5.256-5.789z"
      fillRule="evenodd"
      fill="currentColor"
    />
  </svg>
);

export default SvgCaretUp;
