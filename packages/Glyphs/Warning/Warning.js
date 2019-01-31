import React from "react";
import "../Glyphs.scss";

 const Warning = ({ ariaText, borderColor, className, fillColor, size, ...props }) => (
  <svg
    aria-hidden={!ariaText}
    className={"aclui-glyph " + className}
    viewBox="0 0 480 480"
    width={size + "px"}
    height={size + "px"}
    role="img"
    {...props}
  >
    {ariaText ? <title>{ariaText}</title> : null}
    <g fill="none">
      <path
        d="M240 391.315c-14.49 0-26.25-11.76-26.25-26.25s11.76-26.25 26.25-26.25 26.25 11.76 26.25 26.25-11.76 26.25-26.25 26.25zm-21-194.25h42v126h-42v-126zm228.795 221.613l-189-378c-7.119-14.237-30.471-14.237-37.59 0l-189 378a21.069 21.069 0 0 0 .924 20.433c3.843 6.175 10.584 9.954 17.871 9.954h378c7.287 0 14.028-3.78 17.871-9.954a21.069 21.069 0 0 0 .924-20.433z"
        className="fill"
        fill={fillColor}
      />
      <path
        d="M447.795 418.678l-189-378c-7.119-14.237-30.471-14.237-37.59 0l-189 378a21.069 21.069 0 0 0 .924 20.433c3.843 6.175 10.584 9.954 17.871 9.954h378c7.287 0 14.028-3.78 17.871-9.954a21.069 21.069 0 0 0 .924-20.433z"
        className="border"
        stroke={borderColor}
      />
    </g>
  </svg>
);

 export default Warning;