import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { boolean } from "@storybook/addon-knobs";

const tab = "  ";
const newline = "\n";

function tabs(num) {
  return Array(num)
    .fill(tab)
    .join("");
}

function getDisplayProps(props, defaultProps = {}) {
  const propKeys = Object.keys(props);

  return propKeys
    .filter(key => props[key] !== null && props[key] !== defaultProps[key] && key !== "children")
    .map(key => `${key}="${props[key]}"`);
}

function buildString(displayName, displayProps, renderedChildren, hasNoChildren, depth) {
  let outString = `<${displayName}`;
  if (displayProps.length > 2) {
    outString += `${newline}${tabs(depth)}${displayProps.join(`${newline}${tabs(depth)}`)}${tabs(depth - 1)}${newline}`;
  } else if (displayProps.length > 0) {
    outString += ` ${displayProps.join(" ")}`;
  }
  outString += hasNoChildren
    ? ` />`
    : `>${newline}${tabs(depth)}${renderedChildren}${newline}${tabs(depth - 1)}</${displayName}>`;

  return outString;
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

function getJsx(content, depth = 1) {
  if (isArray(content)) {
    return React.Children.map(content, child => {
      return getJsx(child, depth + 1);
    }).join(`${newline}${tabs(depth)}`);
  }

  if (isElement(content)) {
    const displayName = content.type;
    const children = getJsx(content.props.children, depth);

    return `<${displayName}>${newline}${tabs(depth)}${children}${newline}${tabs(depth - 1)}</${displayName}>`;
  }

  if (isComponent(content)) {
    const numChildren = React.Children.count(content.props.children);
    const hasNoChildren = numChildren === 0;
    const displayName = content.type.name;
    const displayProps = getDisplayProps(content.props, content.type.defaultProps);
    const renderedChildren = content.props.children;

    return buildString(displayName, displayProps, getJsx(content.props.children, depth + 1), hasNoChildren, depth);
  }

  return content;
}

const CodeViewer = ({ children, isShown }) => {
  return (
    <>
      {children}
      {isShown && <SyntaxHighlighter language="javascript">{getJsx(children)}</SyntaxHighlighter>}
    </>
  );
};

export default CodeViewer;
