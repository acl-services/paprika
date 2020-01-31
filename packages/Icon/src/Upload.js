import React from "react";

const SvgUpload = ({ title, ...props }) => (
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
    <path
      d="M19.934 11.335c.006-.124.02-.25.02-.374a6.238 6.238 0 00-11.87-2.68 2.84 2.84 0 00-1.763-.603 2.877 2.877 0 00-2.745 3.736 4.219 4.219 0 002.09 7.851h5.087v-4.064H8.079c-.413 0-.537-.262-.268-.576l3.65-4.359c.269-.321.702-.321.97 0l3.651 4.359c.269.321.144.576-.268.576H13.14v4.064h5c.073.006.151.013.224.013 2.28 0 4.129-1.848 4.129-4.13a4.164 4.164 0 00-2.556-3.814l-.003.001z"
      fillRule="evenodd"
      fill="currentColor"
    />
  </svg>
);

export default SvgUpload;
