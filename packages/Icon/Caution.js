import React from "react";

const SvgCaution = ({ title, ...props }) => (
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
    {...props}
  >
    <title>{title}</title>
    <defs>
      <path
        d="M12 19.566a1.313 1.313 0 1 1 .001-2.626A1.313 1.313 0 0 1 12 19.566zm-1.05-9.713h2.1v6.3h-2.1v-6.3zm11.44 11.08l-9.45-18.9c-.356-.711-1.524-.711-1.88 0l-9.45 18.9c-.161.326-.145.713.046 1.023.193.308.53.497.894.497h18.9c.364 0 .701-.189.894-.497.19-.31.207-.697.046-1.022z"
        id="Caution_svg__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#Caution_svg__a" fillRule="evenodd" />
  </svg>
);

export default SvgCaution;
