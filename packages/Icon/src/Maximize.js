import React from "react";

function SvgMaximize({ title, titleId, ...props }) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="Maximize_svg__feather Maximize_svg__feather-maximize-2"
      css={`
        color: ${props.color};
        width: ${props.size};
        height: ${props.size};
        vertical-align: text-top;
      `}
      focusable={false}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
    </svg>
  );
}

export default SvgMaximize;
