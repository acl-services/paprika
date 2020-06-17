import React from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow as syntaxTheme } from "react-syntax-highlighter/dist/esm/styles/prism";
import Button from "@paprika/button";
import HideIcon from "@paprika/icon/lib/Times";
import CopiedIcon from "@paprika/icon/lib/Check";
import { getJSX, copyToClipboard } from "./CodeViewer.helpers";
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
  const viewerId = React.useRef(nanoid()).current;

  const handleToggle = () => {
    setIsShown(prevIsShown => !prevIsShown);
  };

  const handleCopy = () => {
    const codeSelector = `#code-viewer-${viewerId} .paprika-code-viewer pre code:last-child`;
    copyToClipboard(codeSelector);
    setCopyLabel(<CopiedIcon />);
    setTimeout(() => {
      setCopyLabel("Copy");
    }, 1000);
  };

  return (
    <div id={`code-viewer-${viewerId}`}>
      {children}
      {isShown ? (
        <sc.CodeBox className="paprika-code-viewer">
          <SyntaxHighlighter language="javascript" style={syntaxTheme} showLineNumbers>
            {getJSX(children)}
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
      ) : (
        <div>
          <sc.ShowButton onClick={handleToggle} size="small" kind="link">
            Show Code
          </sc.ShowButton>
        </div>
      )}
    </div>
  );
};

CodeViewer.propTypes = propTypes;
CodeViewer.defaultProps = defaultProps;

export default CodeViewer;
