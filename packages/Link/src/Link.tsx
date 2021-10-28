import React from "react";
import * as sc from "./Link.styles";

export interface LinkProps {
  [x: string]: any;

  /** Text for aria-label. */
  a11yText?: string;

  /** Open url in a new Tab, is indicated by a Tab icon after the link. */
  isExternalLink?: boolean;

  /** Remove the default underline */
  hasNoUnderline?: boolean;

  /** If hasTruncation is set to true, the link will stay in one line */
  hasTruncation?: boolean;

  /** Change font-color according to background color */
  isDark?: boolean;

  /** Set font-color to black */
  isSubtle?: boolean;

  /** Icon + text format for Navigation/Menu */
  isMenu?: boolean;

  /** Content to be displayed: texts, icons, etc. */
  children?: React.ReactNode;

  /** mMax-width for Link to be truncated */
  maxWidth?: string;
}
function Link(props: LinkProps): JSX.Element {
  const {
    a11yText = null,
    children = null,
    isExternalLink = false,
    hasNoUnderline = false,
    hasTruncation = false,
    isSubtle = false,
    isDark = false,
    isMenu = false,
    maxWidth = "100%",
    ...moreProps
  } = props;
  return (
    <sc.Link
      data-pka-anchor="link"
      hasNoUnderline={hasNoUnderline}
      isDark={isDark}
      isSubtle={isSubtle}
      isMenu={isMenu}
      target={isExternalLink ? "_blank" : ""}
      rel={isExternalLink ? "noreferrer" : ""}
      aria-label={a11yText}
      maxWidth={maxWidth}
      {...moreProps}
    >
      <sc.LinkContent hasTruncation={hasTruncation}>
        {children}
        {isExternalLink && !hasTruncation && <sc.ExternalLinkIcon />}
      </sc.LinkContent>
      {isExternalLink && hasTruncation && <sc.ExternalLinkIcon />}
    </sc.Link>
  );
}

Link.displayName = "Link";

export default Link;
