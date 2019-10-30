import React from "react";

const SvgArrowDown = ({ title, ...props }) => (
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
        d="M10.514 17.293c.82.82 2.151.82 2.972 0L22.5 8.279 20.271 6.05l-8.27 8.272L3.728 6.05 1.5 8.279l9.014 9.014z"
        id="Arrow-Down_svg__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#Arrow-Down_svg__a" fillRule="evenodd" />
  </svg>
);

export default SvgArrowDown;
