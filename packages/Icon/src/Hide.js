import React from "react";

function SvgHide({ title, titleId, ...props }) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 19 16"
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
      <path fill="#3F3D3C" d="M1.506 14.142L15.648 0l1.179 1.179L2.685 15.32z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.52 12.128a9.789 9.789 0 005.647 1.782c4.166 0 7.725-2.591 9.166-6.25a9.903 9.903 0 00-5.013-5.332l-1.268 1.268a8.146 8.146 0 014.465 4.064 8.133 8.133 0 01-7.35 4.584 8.163 8.163 0 01-4.455-1.308L3.52 12.128zm3.39-3.39a2.497 2.497 0 002.257 1.422c1.383 0 2.5-1.116 2.5-2.5 0-.997-.58-1.855-1.422-2.257L6.91 8.74zM7.34 5.95l.116-.115a2.51 2.51 0 00-.116.115zm2.815-2.814a8.339 8.339 0 00-.99-.059 8.142 8.142 0 00-7.35 4.583c.412.84.952 1.589 1.591 2.224l-1.17 1.17A9.894 9.894 0 010 7.66c1.442-3.658 5-6.25 9.167-6.25a9.85 9.85 0 012.415.3l-1.426 1.426z"
        fill="#3F3D3C"
      />
    </svg>
  );
}

export default SvgHide;
