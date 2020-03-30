import React from "react";
import PropTypes from "prop-types";
import { boolean } from "@storybook/addon-knobs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow as syntaxTheme } from "react-syntax-highlighter/dist/esm/styles/prism";
import Button from "@paprika/button";
import HideIcon from "@paprika/icon/lib/Hide";
import CopiedIcon from "@paprika/icon/lib/Check";
import { getJsx, getDisplayProps, copyToClipboard } from "./CodeViewer.helpers";
import * as sc from "./CodeViewer.styles";

const propTypes = {
  children: PropTypes.node,
  defaultIsShown: PropTypes.bool,
};

const defaultProps = {
  children: null,
  defaultIsShown: false,
};

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
        <sc.CodeBox className="paprika-code-viewer">
          <SyntaxHighlighter language="javascript" style={syntaxTheme} showLineNumbers>
            {getJsx(children)}
          </SyntaxHighlighter>
          <sc.Buttons>
            <sc.CopyButton onClick={handleCopy} size="small" kind="flat">
              {copyLabel}
            </sc.CopyButton>
            <Button.Icon onClick={handleToggle} size="small" kind="flat">
              <HideIcon />
            </Button.Icon>
          </sc.Buttons>
        </sc.CodeBox>
      )}
      {!isShown && (
        <sc.ShowButton onClick={handleToggle} size="small" kind="link">
          Show Code
        </sc.ShowButton>
      )}
    </>
  );
};

CodeViewer.propTypes = propTypes;
CodeViewer.defaultProps = defaultProps;

export default CodeViewer;
