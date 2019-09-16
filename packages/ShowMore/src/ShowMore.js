import React from "react";
import ReactDOMServer from "react-dom/server";
import PropTypes from "prop-types";
import truncate from "lodash/truncate";
import uuid from "uuid/v4";
import useI18n from "@paprika/l10n/lib/useI18n";
import Button from "@paprika/button";
import { toggleStyles } from "./ShowMore.styles";

const propTypes = {
  /** Additional description for "Show more" link. Should be a "topic" that will be appended to "Show more about [topic]". */
  a11yText: PropTypes.string,

  /* Full content to be revealed. */
  children: PropTypes.node.isRequired,

  /* Length, in characters, of truncated preview content. */
  collapsedLength: PropTypes.number,
};

const defaultProps = {
  a11yText: null,
  collapsedLength: 255,
};

function getTruncatedVersion(content, length) {
  return truncate(content, {
    length,
    separator: " ",
  });
}

const ShowMore = props => {
  const { a11yText, children, collapsedLength, ...moreProps } = props;

  const I18n = useI18n();
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const [collapsedContent, setCollapsedContent] = React.useState();
  const contentId = React.useRef(uuid()).current;

  React.useEffect(() => {
    setCollapsedContent(`${getTruncatedVersion(ReactDOMServer.renderToStaticMarkup(children), collapsedLength)} `);
  }, [children, collapsedLength]);

  function getToggleLabel() {
    return isCollapsed ? I18n.t("showMore.more") : I18n.t("showMore.less");
  }

  function getA11yText() {
    if (a11yText) {
      return isCollapsed
        ? `${I18n.t("showMore.more_about")}: ${a11yText}`
        : `${I18n.t("showMore.less_about")}: ${a11yText}`;
    }
    return getToggleLabel();
  }

  const handleToggle = () => {
    setIsCollapsed(prevCollapsed => !prevCollapsed);
  };

  return (
    <div data-pka-anchor="show-more" {...moreProps}>
      {isCollapsed ? (
        <span
          dangerouslySetInnerHTML={{ __html: collapsedContent }}
          data-pka-anchor="show-more.content"
          id={contentId}
        />
      ) : (
        <span data-pka-anchor="show-more.content" id={contentId}>
          {children}
        </span>
      )}
      <span isCollapsed={isCollapsed} css={toggleStyles}>
        <Button
          a11yText={getA11yText()}
          aria-controls={contentId}
          aria-expanded={!isCollapsed}
          kind="link"
          onClick={handleToggle}
        >
          {getToggleLabel()}
        </Button>
      </span>
    </div>
  );
};

ShowMore.displayName = "ShowMore";
ShowMore.propTypes = propTypes;
ShowMore.defaultProps = defaultProps;

export default ShowMore;
