import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Tag.styles";
import * as types from "./types";

export default function Tag(props) {
  const { children, onRemove, size, onClick, a11yText, isDisabled, ...moreProps } = props;
  const isChildString = typeof children === "string";

  const handleRemove = e => {
    onRemove();
    e.stopPropagation();
  };

  const content = (
    <>
      <sc.Ellipsis isChildString={isChildString} size={size}>
        {children}
      </sc.Ellipsis>
      {onRemove ? (
        <sc.Delete isDisabled={isDisabled} size={size} data-pka-anchor="tag.remove" onClick={handleRemove} />
      ) : null}
    </>
  );

  if (onClick) {
    return (
      <sc.RawButtonTag
        a11yText={a11yText}
        isDisabled={isDisabled}
        onClick={onClick}
        size={size}
        {...moreProps}
        data-pka-anchor="tag"
      >
        {content}
      </sc.RawButtonTag>
    );
  }

  return (
    <sc.Tag data-pka-anchor="tag" size={size} {...moreProps}>
      {content}
    </sc.Tag>
  );
}

Tag.types = {
  size: types.sizes,
  theme: types.themes,
  severityTheme: types.severityThemes,
};

const propTypes = {
  /** used in aria-tag on the root element */
  a11yText: PropTypes.string,
  /** Can pass a custom border color */
  borderColor: PropTypes.string,
  /** Content to show in the central area of the tag */
  children: PropTypes.node.isRequired,
  /** Disables tag onClick and remove button functionality */
  isDisabled: PropTypes.bool,
  /** Fires when clicking the root element. Should also pass value for a11yText when using this */
  onClick: PropTypes.func,
  /**  Pass a function to show a remove button */
  onRemove: PropTypes.func,
  /** Size of the tag(font size, min-height, padding, etc). */
  size: PropTypes.oneOf([Tag.types.size.MEDIUM, Tag.types.size.LARGE]),
  /** Visual theme of the tag */
  theme: PropTypes.oneOf([
    Tag.types.theme.BLACK,
    Tag.types.theme.BLUE,
    Tag.types.theme.GREEN,
    Tag.types.theme.GREY,
    Tag.types.theme.LIGHT_BLUE,
    Tag.types.theme.LIGHT_ORANGE,
    Tag.types.theme.ORANGE,
    Tag.types.severityTheme.NO_RISK,
    Tag.types.severityTheme.LOW_RISK,
    Tag.types.severityTheme.MEDIUM_RISK,
    Tag.types.severityTheme.HIGH_RISK,
    Tag.types.severityTheme.ALERT,
  ]),
};

const defaultProps = {
  a11yText: null,
  borderColor: null,
  isDisabled: false,
  onClick: null,
  onRemove: null,
  size: Tag.types.size.MEDIUM,
  theme: Tag.types.theme.GREY,
};

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;
