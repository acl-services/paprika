module.exports = {
  icon: true,
  replaceAttrValues: {
    "#717171": "currentColor",
    "#757575": "currentColor",
    "#767676": "currentColor",
    "#444": "currentColor",
    "#3F3D3C": "currentColor",
  },
  svgProps: {
    // We need to render string template
    // eslint-disable-next-line no-template-curly-in-string
    css: "{`color: ${props.color};width: ${props.size};height: ${props.size};vertical-align: text-top;`}",
    "data-pka-anchor": "icon",
    focusable: false,
  },
  titleProp: true,
  template: ({ template }, opts, { imports, interfaces, componentName, jsx, exports }) => {
    const plugins = ["jsx"];
    const typeScriptTpl = template.smart({ plugins });
    return typeScriptTpl.ast`
    ${imports}
    ${interfaces}
    function ${componentName}({title=null, ...props}) {
      return ${jsx};
    }
    ${exports}
  `;
  },
};
