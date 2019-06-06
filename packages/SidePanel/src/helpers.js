import React from "react";

export function extractChildren(children, types) {
  const _children = [];
  const components = {};
  if (Array.isArray(types)) {
    React.Children.toArray(children).forEach(child => {
      if (types.includes(child.type.componentType)) {
        if (Object.prototype.hasOwnProperty.call(components, child.type.componentType)) {
          const childs = Array.isArray(components[child.type.componentType])
            ? [child, ...components[child.type.componentType]]
            : [child, components[child.type.componentType]];

          components[child.type.componentType] = childs;
        } else {
          components[child.type.componentType] = child;
        }
      } else {
        _children.push(child);
      }
    });

    return { ...components, children: _children };
  }

  throw new Error("extractChildren types parameter must be an Array");
}
