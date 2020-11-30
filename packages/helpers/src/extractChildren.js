import React from "react";

export default function extractChildren(children, types) {
  const _children = [];
  const components = {};
  let result;

  if (Array.isArray(types)) {
    React.Children.toArray(children).some(child => {
      if (child.type && child.type === React.Fragment) {
        result = extractChildren(child.props.children, types);
        return true;
      }

      if (child.type && types.includes(child.type.displayName)) {
        if (Object.prototype.hasOwnProperty.call(components, child.type.displayName)) {
          const childs = Array.isArray(components[child.type.displayName])
            ? [...components[child.type.displayName], child]
            : [components[child.type.displayName], child];

          components[child.type.displayName] = childs;
        } else {
          components[child.type.displayName] = child;
        }
      } else {
        _children.push(child);
      }

      return false;
    });

    return result || { ...components, children: _children };
  }

  throw new Error("extractChildren types parameter must be an Array");
}
