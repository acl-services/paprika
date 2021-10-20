import React from "react";
import NewTabIcon from "@paprika/icon/lib/NewTab";
import * as sc from "./Link.styles";



function Link(props: LinkProps) {
  const {
    a11yText = null,
    children = null,
    isExternalLink = false,
    hasNoUnderline = false,
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
      aria-label={a11yText || null}
      maxWidth={maxWidth}
      {...moreProps}
    >
      <sc.LinkContent>{children}</sc.LinkContent>
      {isExternalLink && <NewTabIcon css={sc.ExternalLinkIconStyles} style={{ minWidth: "20px" }} />}
    </sc.Link>
  );
}

export interface LinkProps {
  [x: string]: any;

  /** Text for aria-label. */
  a11yText?: string;

  /** Open url in a new Tab, is indicated by a Tab icon after the link. */
  isExternalLink?: boolean;

  /** Remove the default underline */
  hasNoUnderline?: boolean;

  /** Change font-color according to background color */
  isDark?: boolean;

  /** Set font-color to black */
  isSubtle?: boolean;

  /** Icon + text format for Navigation/Menu */
  isMenu?: boolean;

  /** Content to be displayed: texts, icons, etc. */
  children?: React.ReactNode;

  /** max-width to be truncated */
  maxWidth?: string;
};



Link.displayName = "Link";

export default Link;
