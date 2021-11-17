import { css } from "styled-components";

const theme = (componentName, styledFn) => props => {
  if (componentName in props.theme) {
    return props.theme[componentName]({ nextCSS: styledFn, css, ...props });
  }

  return styledFn(props);
};

export default theme;
