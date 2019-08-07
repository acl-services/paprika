import React from "react";

const SvgRadio = ({ title, ...props }) => (
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
        d="M12 21.5a9.5 9.5 0 110-19 9.5 9.5 0 010 19zm0-2.427c3.935 0 7.125-3.178 7.125-7.099 0-3.92-3.19-7.099-7.125-7.099s-7.125 3.178-7.125 7.1c0 3.92 3.19 7.098 7.125 7.098zm0-3.55a3.556 3.556 0 01-3.563-3.549c0-1.96 1.595-3.55 3.563-3.55a3.556 3.556 0 013.563 3.55c0 1.96-1.595 3.55-3.563 3.55z"
        id="Radio_svg__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#Radio_svg__a" fillRule="evenodd" />
  </svg>
);

export default SvgRadio;
