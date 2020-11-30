import React from "react";

export default function extractChildren(children, types) {
  const _children = [];
  const components = {};

  if (Array.isArray(types)) {
    for (const child of React.Children.toArray(children)) {
      if (child.type && child.type === React.Fragment) {
        return extractChildren(child.props.children, types);
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
    }

    return { ...components, children: _children };
  }

  throw new Error("extractChildren types parameter must be an Array");
}
