import React from "react";

const SvgAdd = props => (
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
      d="M30 208.5h157.498a21.005 21.005 0 0 0 14.851-6.149A21.007 21.007 0 0 0 208.5 187.5V30h63v157.5a21.005 21.005 0 0 0 6.149 14.851A21.005 21.005 0 0 0 292.5 208.5H450v63H292.5a21.007 21.007 0 0 0-14.851 6.15 21.005 21.005 0 0 0-6.149 14.852V450h-63V292.502a21.007 21.007 0 0 0-6.15-14.851 21.007 21.007 0 0 0-14.852-6.151H30v-63z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgAdd;
