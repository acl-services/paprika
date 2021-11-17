module.exports = ({ template }, opts, { imports, interfaces, componentName, jsx, exports }) => {
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
};
