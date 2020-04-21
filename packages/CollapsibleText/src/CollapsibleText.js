import React from "react";
import ReactDOMServer from "react-dom/server";
import PropTypes from "prop-types";
import truncate from "lodash.truncate";
import uuid from "uuid/v4";
import useI18n from "@paprika/l10n/lib/useI18n";
import Button from "@paprika/button";
import { toggleStyles } from "./CollapsibleText.styles";

const propTypes = {
  /** Additional description for "Show more" link. Should be a "topic" that will be appended to "Show more about [topic]". */
  a11yText: PropTypes.string,

  /** Full content to be revealed. Can include HTML markup, but should not include dynamic React nodes. */
  children: PropTypes.node.isRequired,

  /** Length, in characters, of truncated preview content. */
  collapsedLength: PropTypes.number,
};

const defaultProps = {
  a11yText: null,
  collapsedLength: 255,
};

const collapseThreshold = 12;

function getTruncatedVersion(content, length) {
  return truncate(content, {
    length,
    separator: " ",
  });
}

function CollapsibleText(props) {
  const { a11yText, children, collapsedLength, ...moreProps } = props;

  const I18n = useI18n();
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const contentId = React.useRef(uuid()).current;

  function getToggleLabel() {
    return isCollapsed ? I18n.t("collapsibleText.more") : I18n.t("collapsibleText.less");
  }

  function getA11yText() {
    if (a11yText) {
      return isCollapsed
        ? `${I18n.t("collapsibleText.more_about")}: ${a11yText}`
        : `${I18n.t("collapsibleText.less_about")}: ${a11yText}`;
    }
    return getToggleLabel();
  }

  const handleToggle = () => {
    setIsCollapsed(prevCollapsed => !prevCollapsed);
  };

  const renderedContent = ReactDOMServer.renderToStaticMarkup(children);
  const isOverflowing = renderedContent.length > collapsedLength + collapseThreshold;
  let collapsedContent;
  if (isOverflowing) collapsedContent = `${getTruncatedVersion(renderedContent, collapsedLength)} `;

  return (
    <div data-pka-anchor="collapsible-text" {...moreProps}>
      {isCollapsed && isOverflowing ? (
        <span
          dangerouslySetInnerHTML={{ __html: collapsedContent }}
          data-pka-anchor="collapsible-text.content"
          id={contentId}
        />
      ) : (
        <span data-pka-anchor="collapsible-text.content" id={contentId}>
          {children}
        </span>
      )}
      {isOverflowing && (
        <span isCollapsed={isCollapsed} css={toggleStyles}>
          <Button
            a11yText={getA11yText()}
            aria-controls={contentId}
            aria-expanded={!isCollapsed}
            isSemantic={false}
            kind={Button.Kinds.LINK}
            onClick={handleToggle}
          >
            {getToggleLabel()}
          </Button>
        </span>
      )}
    </div>
  );
}

CollapsibleText.displayName = "CollapsibleText";
CollapsibleText.propTypes = propTypes;
CollapsibleText.defaultProps = defaultProps;

export default CollapsibleText;
