import React from "react";

function SvgFilter({ title, titleId, ...props }) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 14"
      fill="none"
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
      <mask id="filter_svg__a" maskUnits="userSpaceOnUse" x={0} y={0} width={20} height={14} fill="#000">
        <path fill="#fff" d="M0 0h20v14H0z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M1 1v2h18V1H1zm7 12h4v-2H8v2zm8-5H4V6h12v2z" />
      </mask>
      <path fillRule="evenodd" clipRule="evenodd" d="M1 1v2h18V1H1zm7 12h4v-2H8v2zm8-5H4V6h12v2z" fill="#3F3D3C" />
      <path
        d="M1 3H.75v.25H1V3zm0-2V.75H.75V1H1zm18 2v.25h.25V3H19zm0-2h.25V.75H19V1zm-7 12v.25h.25V13H12zm-4 0h-.25v.25H8V13zm4-2h.25v-.25H12V11zm-4 0v-.25h-.25V11H8zM4 8h-.25v.25H4V8zm12 0v.25h.25V8H16zM4 6v-.25h-.25V6H4zm12 0h.25v-.25H16V6zM1.25 3V1h-.5v2h.5zM19 2.75H1v.5h18v-.5zM18.75 1v2h.5V1h-.5zM1 1.25h18v-.5H1v.5zm11 11.5H8v.5h4v-.5zM11.75 11v2h.5v-2h-.5zM8 11.25h4v-.5H8v.5zM8.25 13v-2h-.5v2h.5zM4 8.25h12v-.5H4v.5zM3.75 6v2h.5V6h-.5zM16 5.75H4v.5h12v-.5zM16.25 8V6h-.5v2h.5z"
        fill="#3F3D3C"
        mask="url(#filter_svg__a)"
      />
    </svg>
  );
}

export default SvgFilter;
