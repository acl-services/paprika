import React from "react";

function SvgSort({ title, titleId, ...props }) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.102.605a.736.736 0 01.565-.272c.215 0 .42.1.564.272l2.67 3.2a.445.445 0 01.066.448.382.382 0 01-.348.247H.715a.382.382 0 01-.35-.247.445.445 0 01.067-.448l2.67-3.2zM10.898 13.395a.736.736 0 01-.565.272.736.736 0 01-.564-.272l-2.67-3.2a.445.445 0 01-.066-.448.382.382 0 01.348-.247h5.904c.151 0 .288.097.35.247a.445.445 0 01-.067.448l-2.67 3.2z"
        fill="#3F3D3C"
      />
      <path fill="#3F3D3C" d="M9.5 2.833h1.667V9.5H9.5zM2.833 4.5H4.5v6.667H2.833z" />
    </svg>
  );
}

export default SvgSort;
