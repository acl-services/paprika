import React from "react";

const SvgTimes = ({ title, ...props }) => (
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
    <defs>
      <path
        d="M12.743 9.029L20.27 1.5 22.5 3.728l-7.529 7.53a1.05 1.05 0 000 1.485l7.529 7.529-2.229 2.228-7.528-7.529a1.05 1.05 0 00-1.486 0L3.728 22.5 1.5 20.272l7.529-7.53a1.05 1.05 0 000-1.485L1.5 3.728 3.728 1.5l7.53 7.529c.41.41 1.074.41 1.485 0z"
        id="times_svg__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#times_svg__a" fillRule="evenodd" />
  </svg>
);

export default SvgTimes;
