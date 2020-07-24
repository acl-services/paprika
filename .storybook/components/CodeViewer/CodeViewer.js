import React from "react";
import ReactDOM from "react-dom";
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
  getDisplayElement: PropTypes.func,
};

const defaultProps = {
  children: null,
  defaultIsShown: false,
  getDisplayElement: () => {},
};

const SourceCode = props => {
  const { children, isShown, portalElement, onToggle } = props;

  const viewerId = React.useRef(nanoid()).current;
  const [copyLabel, setCopyLabel] = React.useState("Copy");

  const handleCopy = () => {
    const codeSelector = `#code-viewer-${viewerId} pre code:last-child`;
    copyToClipboard(codeSelector);
    setCopyLabel(<CopiedIcon />);
    setTimeout(() => {
      setCopyLabel("Copy");
    }, 1000);
  };

  const renderedSourceCode = isShown ? (
    <sc.CodeBox className="paprika-code-viewer" id={`code-viewer-${viewerId}`}>
      <SyntaxHighlighter language="javascript" style={syntaxTheme} showLineNumbers>
        {getJSX(children)}
      </SyntaxHighlighter>
      <sc.Buttons>
        <sc.CopyButton onClick={handleCopy} size="small" kind="flat">
          {copyLabel}
        </sc.CopyButton>
        <Button.Icon onClick={onToggle} size="small" kind="flat">
          <HideIcon />
        </Button.Icon>
      </sc.Buttons>
    </sc.CodeBox>
  ) : (
    <div>
      <sc.ShowButton onClick={onToggle} size="small" kind="link">
        Show Code
      </sc.ShowButton>
    </div>
  );

  if (Boolean(portalElement)) {
    return ReactDOM.createPortal(renderedSourceCode, portalElement);
  }
  return renderedSourceCode;
};

const CodeViewer = props => {
  const { children, defaultIsShown, getDisplayElement } = props;

  const [isShown, setIsShown] = React.useState(defaultIsShown);
  const [portalElement, setPortalElement] = React.useState();

  React.useLayoutEffect(() => {
    const portalElement = getDisplayElement();
    if (Boolean(portalElement)) {
      setPortalElement(portalElement);
    }
  }, []);

  const handleToggle = () => {
    setIsShown(prevIsShown => !prevIsShown);
  };

  const sourceCodeProps = {
    children,
    isShown,
    onToggle: handleToggle,
    portalElement,
  };

  return (
    <React.Fragment>
      {children}
      <SourceCode {...sourceCodeProps} />
    </React.Fragment>
  );
};

CodeViewer.propTypes = propTypes;
CodeViewer.defaultProps = defaultProps;

export default CodeViewer;
