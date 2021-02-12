import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import * as sc from "./Tag.styles";
import * as types from "./types";

export default function Tag(props) {
  const { children, onRemove, size, onClick, a11yText, avatar, isDisabled, ...moreProps } = props;

  const handleRemove = e => {
    onRemove();
    e.stopPropagation();
  };

  const content = (
    <>
      {avatar}
      <sc.Ellipsis size={size}>{children}</sc.Ellipsis>
      {onRemove ? (
        <sc.Delete
          isDisabled={isDisabled}
          size={size}
          data-pka-anchor="tag.remove"
          data-qa-anchor="tag.remove"
          onClick={handleRemove}
        />
      ) : null}
    </>
  );

  const tagProps = {
    size,
    "data-pka-anchor": "tag",
  };

  if (onClick) {
    tagProps.a11yText = a11yText;
    tagProps.isDisabled = isDisabled;
    tagProps.onClick = onClick;
  }

  return (
    <sc.Tag as={onClick ? RawButton : "div"} {...tagProps} {...moreProps}>
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
  /** Can pass a avatar to be displayed to the left of the tag content */
  avatar: PropTypes.node,
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
  avatar: null,
  isDisabled: false,
  onClick: null,
  onRemove: null,
  size: Tag.types.size.MEDIUM,
  theme: Tag.types.theme.GREY,
};

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;
