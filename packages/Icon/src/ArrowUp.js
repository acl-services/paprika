import React from "react";

const SvgArrowUp = ({ title, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 12"
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
        d="M10.514 17.335c.82.82 2.151.82 2.972 0L22.5 8.32l-2.229-2.228-8.27 8.271-8.272-8.271L1.5 8.32l9.014 9.015z"
        id="Arrow-Up_svg__a"
      />
    </defs>
    <use fill="currentColor" transform="matrix(1 0 0 -1 -1 18.042)" xlinkHref="#Arrow-Up_svg__a" fillRule="evenodd" />
  </svg>
);

export default SvgArrowUp;
