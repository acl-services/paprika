module.exports = (variables, { tpl }) => {
  return tpl`
    ${variables.imports};
    ${variables.interfaces};
    function ${variables.componentName}({title=null, color=undefined, size=undefined, style: styleProp, ...props}) {
      const style = {color, width: size, height: size, fontSize: size, verticalAlign: 'text-top', ...styleProp};
      return ${variables.jsx};
    }
    ${variables.exports};
  `;
};
