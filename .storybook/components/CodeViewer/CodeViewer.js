import React from "react";
import PropTypes from "prop-types";
import { boolean } from "@storybook/addon-knobs";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow as syntaxTheme } from "react-syntax-highlighter/dist/esm/styles/prism";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import Button from "@paprika/button";
import HideIcon from "@paprika/icon/lib/Hide";
import CopiedIcon from "@paprika/icon/lib/Check";

const propTypes = {
  children: PropTypes.node,
  defaultIsShown: PropTypes.bool,
};

const defaultProps = {
  children: null,
  defaultIsShown: false,
};

const CodeBox = styled.div`
  border: 1px solid ${tokens.border.color};
  position: relative;

  pre {
    ${stylers.fontSize(-1)}

    font-family: "Roboto Mono", monospaced;
    margin: 0 !important;
    max-height: 500px;

    code {
      &:first-child {
        opacity: 0.4;
      }
    }
  }
`;

const Buttons = styled.div`
  position: absolute;
  right: -1px;
  top: 100%;

  button {
    border-radius: 0;
    font-weight: normal;
    position: relative;

    &:hover,
    &:focus {
      z-index: 1;
    }

    & + button {
      margin-left: -1px;
    }
  }
`;

const ShowButton = styled(Button)`
  margin-left: -8px;
`;

const CopyButton = styled(Button)`
  width: 50px;
`;

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

function copyToClipboard(selector) {
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

const CodeViewer = props => {
  const { children, defaultIsShown } = props;

  const [isShown, setIsShown] = React.useState(defaultIsShown);
  const [copyLabel, setCopyLabel] = React.useState("Copy");

  const handleToggle = () => {
    setIsShown(prevIsShown => !prevIsShown);
  };

  const handleCopy = () => {
    copyToClipboard(".paprika-code-viewer pre code:last-child");
    setCopyLabel(<CopiedIcon />);
    setTimeout(() => {
      setCopyLabel("Copy");
    }, 1000);
  };

  return (
    <>
      {children}
      {isShown && (
        <CodeBox className="paprika-code-viewer">
          <SyntaxHighlighter language="javascript" style={syntaxTheme} showLineNumbers>
            {getJsx(children)}
          </SyntaxHighlighter>
          <Buttons>
            <CopyButton onClick={handleCopy} size="small" kind="flat">
              {copyLabel}
            </CopyButton>
            <Button.Icon onClick={handleToggle} size="small" kind="flat">
              <HideIcon />
            </Button.Icon>
          </Buttons>
        </CodeBox>
      )}
      {!isShown && (
        <ShowButton onClick={handleToggle} size="small" kind="link">
          Show Code
        </ShowButton>
      )}
    </>
  );
};

CodeViewer.propTypes = propTypes;
CodeViewer.defaultProps = defaultProps;

export default CodeViewer;
