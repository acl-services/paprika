import React from "react";

const tab = "  ";
const newline = "\n";

function tabs(num) {
  return Array(num)
    .fill(tab)
    .join("");
}

function isArray(content) {
  return Boolean(content && typeof content !== "string" && content.length !== undefined);
}

function isComponent(content) {
  return Boolean(content && content.type && typeof content.type === "function");
}

function isElement(content) {
  return Boolean(content && content.type && typeof content.type === "string");
}

function isFragment(content) {
  return Boolean(content && content.type && typeof content.type === "symbol");
}

function getComponentString(displayName, displayProps, renderedChildren, hasNoChildren, depth) {
  let outString = `<${displayName}`;
  if (displayProps.length > 2) {
    outString += `${newline}${tabs(depth)}${displayProps.join(`${newline}${tabs(depth)}`)}${tabs(depth - 1)}${newline}`;
  } else if (displayProps.length > 0) {
    outString += ` ${displayProps.join(" ")}`;
  }
  outString += hasNoChildren
    ? `${displayProps.length === 0 ? " " : ""}/>`
    : `>${newline}${tabs(depth)}${renderedChildren}${newline}${tabs(depth - 1)}</${displayName}>`;

  return outString;
}

export function getJsx(content, depth = 1) {
  if (isArray(content)) {
    return React.Children.map(content, child => {
      return getJsx(child, depth);
    }).join(`${newline}${tabs(depth - 1)}`);
  }

  if (isElement(content)) {
    const displayName = content.type;
    const children = getJsx(content.props.children, depth);

    return `<${displayName}>${newline}${tabs(depth)}${children}${newline}${tabs(depth - 1)}</${displayName}>`;
  }

  if (isFragment(content)) {
    const children = getJsx(content.props.children, depth + 1);
    return `<>${newline}${tabs(depth)}${children}${newline}${tabs(depth - 1)}</>`;
  }

  if (isComponent(content)) {
    const numChildren = React.Children.count(content.props.children);
    const hasNoChildren = numChildren === 0;
    const displayName = content.type.name.replace(/^Svg/, "");
    const displayProps = getDisplayProps(content.props, content.type.defaultProps);
    const renderedChildren = content.props.children;

    return getComponentString(
      displayName,
      displayProps,
      getJsx(content.props.children, depth + 1),
      hasNoChildren,
      depth
    );
  }

  return content;
}

export function getDisplayProps(props, defaultProps = {}) {
  const propKeys = Object.keys(props);

  return propKeys
    .filter(key => props[key] !== null && props[key] !== defaultProps[key] && key !== "children")
    .map(key => `${key}${props[key] !== true ? `="${props[key]}"` : ""}`);
}

export function copyToClipboard(selector) {
  const code = document.querySelector(selector).textContent;
  const textbox = document.createElement("textarea");
  const activator = document.activeElement;
  textbox.value = code;
  textbox.setAttribute("readonly", "");
  textbox.style.position = "absolute";
  textbox.style.left = "-9999px";
  document.body.appendChild(textbox);
  textbox.select();
  activator.focus();
  document.execCommand("copy");
  document.body.removeChild(textbox);
}
