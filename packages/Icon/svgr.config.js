const template = require("./helper/template");

module.exports = {
  icon: true,
  replaceAttrValues: {
    "#717171": "currentColor",
    "#757575": "currentColor",
    "#767676": "currentColor",
    "#444": "currentColor",
    "#3F3D3C": "currentColor",
    "#8A8A8A": "currentColor",
  },
  svgProps: {
    // We need to render string template
    // prettier-ignore
    // eslint-disable-next-line no-template-curly-in-string
    css: "{`color:${props.color}; width:${props.size}; height:${props.size}; font-size:${props.size}; vertical-align:text-top;`}",
    "data-pka-anchor": "icon",
    focusable: false,
  },
  titleProp: true,
  template,
};
