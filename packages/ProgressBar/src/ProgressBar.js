import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Heading from "@paprika/heading";
import * as sc from "./ProgressBar.styles";

const propTypes = {
  /** Descriptive a11y text for assistive technologies. */
  a11yText: PropTypes.string,

  /** Description for the ProgressBar */
  bodyText: PropTypes.string,

  /** Specifies how much progress has been completed from 0-100 */
  completed: PropTypes.number,

  /** Text for the heading displayed above ProgressBar */
  header: PropTypes.node,

  /** Semantic heading level of header */
  headerLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),

  /** If ProgressBar is displayed in a compact style */
  isCompact: PropTypes.bool,
};

const defaultProps = {
  a11yText: null,
  bodyText: null,
  completed: 0,
  header: null,
  headerLevel: 3,
  isCompact: false,
};

function ProgressBar(props) {
  const { a11yText, bodyText, completed, header, headerLevel, isCompact, ...moreProps } = props;
  const [headerId, a11yTextId] = React.useMemo(() => [uuidv4(), uuidv4()], []);

  // The progressbar role requires an accessible name: prefer the explicit a11yText, and
  // fall back to the visible header, which is what describes the bar on screen.
  const labelledBy = [header ? headerId : null, a11yText ? a11yTextId : null].filter(Boolean).join(" ") || null;

  return (
    <sc.ProgressBar {...moreProps}>
      {header ? (
        <Heading displayLevel={3} level={headerLevel} id={headerId}>
          {header}
        </Heading>
      ) : null}
      <sc.Bar isCompact={isCompact}>
        <sc.BarFiller
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={completed}
          completed={completed}
          data-pka-anchor="progress-bar"
          role="progressbar"
          aria-labelledby={labelledBy}
        />
      </sc.Bar>
      {bodyText ? <sc.Body>{bodyText}</sc.Body> : null}
      {a11yText ? (
        <sc.A11yText aria-live="polite" id={a11yTextId}>
          {a11yText}
        </sc.A11yText>
      ) : null}
    </sc.ProgressBar>
  );
}

ProgressBar.displayName = "ProgressBar";
ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;

export default ProgressBar;
