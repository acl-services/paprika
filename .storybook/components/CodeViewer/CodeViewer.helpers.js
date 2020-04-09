import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";

// modified getReactElementDisplayName from react-element-to-jsx-string
// https://github.com/algolia/react-element-to-jsx-string/blob/a0005d0b87271a3b206fed2af45e77e776523522/src/parser/parseReactElement.js#L15-L20
function getDisplayName(element) {
  const displayName =
    element.type.displayName ||
    (element.type.name !== "_default" ? element.type.name : null) || // function name
    (typeof element.type === "function" // function without a name, you should provide one
      ? "Anonymous"
      : element.type);

  return typeof displayName === "string" ? displayName.replace(/^Svg/, "") : displayName;
}

const formatOptions = {
  showFunctions: true,
  showDefaultProps: false,
  filterProps: ["key"],
  maxInlineAttributesLineLength: 40,
  displayName: getDisplayName,
};

export function getJSX(children) {
  return Array.isArray(children)
    ? children.map(child => getJSX(child)).join("\n")
    : reactElementToJSXString(children, formatOptions);
}

export function copyToClipboard(selector) {
  const code = document.querySelector(selector).textContent;
  const textbox = document.createElement("textarea");
  const activator = document.activeElement;
  document.body.appendChild(textbox);
  textbox.value = code;
  textbox.select();
  activator.focus();
  document.execCommand("copy");
  document.body.removeChild(textbox);
}
