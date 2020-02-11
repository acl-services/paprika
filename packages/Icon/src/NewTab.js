import React from "react";

const SvgNewTab = ({ title, ...props }) => (
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
    data-pka-anchor="icon"
    focusable={false}
    {...props}
  >
    {title ? <title>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <path d="M0-1h24v24H0z" />
      <path
        d="M9.213 2.394v3.08H3.071v15.392h15.355V14.71h3.071v6.157c0 1.7-1.376 3.079-3.07 3.079H3.07A3.076 3.076 0 010 20.866V5.473c0-1.7 1.376-3.079 3.071-3.079h6.142zM24 0v9.497h-2.707V4.632l-8.516 8.538-1.914-1.919 8.517-8.538h-4.854V0H24z"
        fill="#757575"
      />
    </g>
  </svg>
);

export default SvgNewTab;
