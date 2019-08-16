import React from "react";

const SvgCheckCircle = ({ title, ...props }) => (
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
    <title>{title}</title>
    <defs>
      <path
        d="M12,1.5 C6.21835443,1.5 1.5,6.23496159 1.5,11.999985 C1.5,17.7650084 6.21835443,22.49997 12,22.49997 C17.7816456,22.49997 22.5,17.7816223 22.5,11.999985 C22.5,6.21834769 17.7650316,1.5 12,1.5 L12,1.5 Z M18.421775,8.98150627 L11.9053192,16.9339783 L11.8539896,16.9933281 C11.7444129,17.1075163 11.6260139,17.2077693 11.4880655,17.2865682 C11.0751227,17.5224636 10.5629293,17.5478277 10.1287329,17.353838 C9.959305,17.278147 9.81283512,17.1714777 9.67879664,17.0442566 L5.66867,13.0340348 L7.79534041,10.9073671 L10.6314022,13.7434253 L16.0954003,7.075295 C16.8708585,7.71069876 17.6463168,8.34610252 18.421775,8.98150627 L18.421775,8.98150627 Z"
        id="Check-Circle_svg__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#Check-Circle_svg__a" fillRule="evenodd" />
  </svg>
);

export default SvgCheckCircle;
