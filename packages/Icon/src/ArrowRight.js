import React from "react";

const SvgArrowRight = ({ title, ...props }) => (
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
        d="M10.493 17.314c.821.82 2.151.82 2.972 0l9.014-9.015-2.228-2.228-8.272 8.271-8.271-8.271-2.229 2.228 9.014 9.015z"
        id="Arrow-Right_svg__a"
      />
    </defs>
    <use fill="currentColor" transform="rotate(-90 11.98 12)" xlinkHref="#Arrow-Right_svg__a" fillRule="evenodd" />
  </svg>
);

export default SvgArrowRight;
