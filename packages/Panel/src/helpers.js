import React from "react";
import Panel from "./Panel";
import { slideFromDirections } from "./slideFromDirections";

export function extractChildren(children, types) {
  const _children = [];
  const components = {};
  if (Array.isArray(types)) {
    React.Children.toArray(children).forEach(child => {
      if (child.type && types.includes(child.type.displayName)) {
        if (Object.prototype.hasOwnProperty.call(components, child.type.displayName)) {
          const childs = Array.isArray(components[child.type.displayName])
            ? [child, ...components[child.type.displayName]]
            : [child, components[child.type.displayName]];

          components[child.type.displayName] = childs;
        } else {
          components[child.type.displayName] = child;
        }
      } else {
        _children.push(child);
      }
    });

    return { ...components, children: _children };
  }

  throw new Error("extractChildren types parameter must be an Array");
}

export function warnOfPropErrors(props) {
  const wrongProps = [];

  /* eslint-disable no-unused-expressions */
  switch (props.slideFrom) {
    case slideFromDirections.LEFT:
    case slideFromDirections.RIGHT:
      props.height !== Panel.defaultProps.height && wrongProps.push("height");
      props.offset.left && wrongProps.push("offset.left");
      props.offset.right && wrongProps.push("offset.right");
      break;
    case slideFromDirections.BOTTOM:
      props.width !== Panel.defaultProps.width && wrongProps.push("width");
      props.offset.top && wrongProps.push("offset.top");
      break;
    default:
  }
  /* eslint-enable no-unused-expressions */

  wrongProps.forEach(wrongProp => {
    console.warn(
      `The "${wrongProp}" prop is ignored by the @paprika/${Panel.displayName} component when "slideFrom" is ${props.slideFrom}.`
    );
  });
}
