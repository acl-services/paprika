import React from "react";

const SvgCheck = ({ title, ...props }) => (
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
      d="M22.5 5.695l-11.362 14.04-.071.08c-.13.129-.267.24-.43.323-.42.214-.925.227-1.355.035a1.724 1.724 0 01-.446-.3L1.5 12.853l2.174-2.271 6.11 5.847L20.07 3.7l2.43 1.995z"
      fillRule="evenodd"
      fill="currentColor"
    />
  </svg>
);

export default SvgCheck;
