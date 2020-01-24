import React from "react";

const SvgCalendar = ({ title, ...props }) => (
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
      d="M19.35 4.65V1.5h-2.1v5.25H16.2v-2.1H8.85V1.5h-2.1v5.25H5.7v-2.1H3.6c-1.158 0-2.1.943-2.1 2.1V20.4c0 1.158.942 2.1 2.1 2.1h16.8c1.158 0 2.1-.942 2.1-2.1V6.75c0-1.157-.942-2.1-2.1-2.1h-1.05zM3.6 20.4V8.85h16.8l-.003 11.55H3.6zm11.6-9.6v1.05c0 .297-.032.537-.097.72a5.67 5.67 0 01-.186.469l-2.225 4.787a1.542 1.542 0 01-.478.586c-.21.159-.489.238-.834.238H9.55l2.314-4.504a4.26 4.26 0 01.368-.622 5.33 5.33 0 01.433-.526H9.567a.528.528 0 01-.215-.044.58.58 0 01-.178-.121.642.642 0 01-.125-.178.47.47 0 01-.049-.206V10.8h6.2z"
      fillRule="evenodd"
      fill="currentColor"
    />
  </svg>
);

export default SvgCalendar;
