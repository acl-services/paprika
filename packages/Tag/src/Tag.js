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
    if (!a11yText) {
      console.warn("Tag component should include an a11yText prop if an onClick is provided.");
    }
    return (
      <sc.RawButtonTag
        a11yText={a11yText}
        isDisabled={isDisabled}
        onClick={onClick}
        {...moreProps}
        data-pka-anchor="tag"
      >
        {content}
      </sc.RawButtonTag>
    );
  }

  return (
    <sc.Tag data-pka-anchor="tag" {...moreProps}>
      {content}
    </sc.Tag>
  );
}

Tag.types = {
  size: PropTypes.oneOf([types.MEDIUM, types.LARGE]),
  color: types.colors,
  severity: types.severityTagColors,
};

const propTypes = {
  /** used in aria-tag on the root element */
  a11yText: PropTypes.string,
  /** Can pass a custom border color */
  borderColor: PropTypes.string,
  /**  Pass a function to show a delete button */
  onRemove: PropTypes.func,
  /** Content to show in the central area of the tag */
  children: PropTypes.node.isRequired,
  /** Disables tag onClick and delete button functionality */
  isDisabled: PropTypes.bool,
  /** Fires when clicking the root element. Should also pass value for a11yText when using this */
  onClick: PropTypes.func,
  /** Visual color of the tag */
  tagColor: PropTypes.oneOf([
    Tag.types.color.BLACK,
    Tag.types.color.BLUE,
    Tag.types.color.GREEN,
    Tag.types.color.GREY,
    Tag.types.color.ORANGE,
    Tag.types.color.LIGHT_BLUE,
    Tag.types.color.LIGHT_ORANGE,
    Tag.types.severity.NO_RISK,
    Tag.types.severity.LOW_RISK,
    Tag.types.severity.MEDIUM_RISK,
    Tag.types.severity.HIGH_RISK,
  ]),
  /** Size of the tag(font size, min-height, padding, etc). */
  size: PropTypes.oneOf([types.MEDIUM, types.LARGE]),
};

const defaultProps = {
  borderColor: null,
  a11yText: null,
  isDisabled: false,
  onClick: null,
  onRemove: null,
  size: types.MEDIUM,
  tagColor: Tag.types.color.GREY,
};

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;
