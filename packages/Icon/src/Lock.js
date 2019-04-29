import React from "react";

const SvgLock = ({ title, ...props }) => (
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
        d="M17.25 10.95v-4.2A5.257 5.257 0 0 0 12 1.5a5.255 5.255 0 0 0-5.25 5.25v4.2c-1.158 0-2.1.94-2.1 2.1v7.35c0 1.158.942 2.1 2.1 2.1h10.5c1.158 0 2.1-.942 2.1-2.1v-7.35c0-1.16-.942-2.1-2.1-2.1zM12 18.3a1.576 1.576 0 1 1 .001-3.151A1.576 1.576 0 0 1 12 18.3zm3.15-7.35h-6.3v-4.2A3.154 3.154 0 0 1 12 3.6a3.154 3.154 0 0 1 3.15 3.15v4.2z"
        id="Lock_svg__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#Lock_svg__a" fillRule="evenodd" />
  </svg>
);

export default SvgLock;
