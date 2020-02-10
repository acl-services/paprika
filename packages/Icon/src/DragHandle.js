import React from "react";

const SvgDragHandle = ({ title, ...props }) => (
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
    <path
      d="M16.18 0h-2.635a.2.2 0 00-.2.2v2.634c0 .11.09.2.2.2h2.634a.2.2 0 00.2-.2V.2a.2.2 0 00-.2-.2zm0 6.897h-2.635a.2.2 0 00-.2.2V9.73c0 .11.09.2.2.2h2.634a.2.2 0 00.2-.2V7.097a.2.2 0 00-.2-.2zm0 7.172h-2.635a.2.2 0 00-.2.2v2.634c0 .11.09.2.2.2h2.634a.2.2 0 00.2-.2V14.27a.2.2 0 00-.2-.2zm0 6.897h-2.635a.2.2 0 00-.2.2V23.8c0 .11.09.2.2.2h2.634a.2.2 0 00.2-.2v-2.634a.2.2 0 00-.2-.2zM9.833 0H7.2a.2.2 0 00-.2.2v2.634c0 .11.09.2.2.2h2.634a.2.2 0 00.2-.2V.2a.2.2 0 00-.2-.2zm0 6.897H7.2a.2.2 0 00-.2.2V9.73c0 .11.09.2.2.2h2.634a.2.2 0 00.2-.2V7.097a.2.2 0 00-.2-.2zm0 7.172H7.2a.2.2 0 00-.2.2v2.634c0 .11.09.2.2.2h2.634a.2.2 0 00.2-.2V14.27a.2.2 0 00-.2-.2zm0 6.897H7.2a.2.2 0 00-.2.2V23.8c0 .11.09.2.2.2h2.634a.2.2 0 00.2-.2v-2.634a.2.2 0 00-.2-.2z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgDragHandle;
