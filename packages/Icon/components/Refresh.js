import React from "react";

const SvgRefresh = props => (
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
      d="M358.629 121.371L303 177h126V51l-40.698 40.698C349.641 52.869 297.015 30 240 30 124.206 30 30 124.185 30 240h42c0-92.631 75.369-168 168-168 45.612 0 87.696 18.291 118.629 49.371zM121.371 358.629L177 303H51v126l40.677-40.698C130.359 427.131 182.964 450 240 450c115.794 0 210-94.185 210-210h-42c0 92.631-75.369 168-168 168-45.633 0-87.696-18.291-118.629-49.371z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgRefresh;
