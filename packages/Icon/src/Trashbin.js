import React from "react";

const SvgTrashbin = ({ title, ...props }) => (
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
      d="M9.35 18.3H7.6V8.85h1.75v9.45zm3.5 0H11.1V8.85h1.75v9.45zm3.5 0H14.6V8.85h1.75v9.45zm1.4-11.55H6.2V20.4h11.55V6.75zM9.176 4.6h5.618l-.405-1.086a.488.488 0 00-.233-.164H9.827a.496.496 0 00-.232.164L9.176 4.6zM21.85 6.324a.425.425 0 01-.124.314.383.383 0 01-.313.112H19.85V20.4c0 1.15-.95 2.1-2.1 2.1H6.2c-1.15 0-2.1-.95-2.1-2.1V6.75H2.56a.382.382 0 01-.314-.113.567.567 0 01-.146-.314V5.049a.556.556 0 01.146-.314.49.49 0 01.314-.135h4.47l.956-1.87c.136-.336.382-.623.737-.86a2.087 2.087 0 011.08-.37h4.37c.363.016.723.134 1.078.37.356.237.602.524.738.86l.956 1.87h4.47a.483.483 0 01.314.135.42.42 0 01.121.314v1.275z"
      fillRule="evenodd"
      fill="currentColor"
    />
  </svg>
);

export default SvgTrashbin;
