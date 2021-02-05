import React from "react";
import PropTypes from "prop-types";
import Close from "@paprika/icon/lib/Times";
import * as sc from "./Tag.styles";
import * as types from "./types";

export function Delete({ isDisabled, size, onRemove = () => {} }) {
  return (
    <sc.Delete isDisabled={isDisabled} size={size} data-pka-anchor="tag.delete" onClick={onRemove}>
      <Close />
    </sc.Delete>
  );
}

Delete.propTypes = {
  onRemove: PropTypes.func.isRequired,
  size: PropTypes.oneOf([types.MEDIUM, types.LARGE]).isRequired,
  isDisabled: PropTypes.bool,
};

Delete.defaultProps = {
  isDisabled: false,
};

export default function Tag(props) {
  const { children, onRemove, size, hasDeleteButton, onClick, a11yText, isDisabled, ...moreProps } = props;
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
      {hasDeleteButton ? <Delete isDisabled={isDisabled} onRemove={handleRemove} size={size} /> : null}
    </>
  );

  if (onClick) {
    return (
      <sc.RawButtonTag a11yText={a11yText} isDisabled={isDisabled} onClick={onClick} {...moreProps}>
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
  a11yText: PropTypes.string,
  onRemove: PropTypes.func,
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  hasDeleteButton: PropTypes.bool,
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
  size: PropTypes.oneOf([types.MEDIUM, types.LARGE]),
};

const defaultProps = {
  a11yText: null,
  hasDeleteButton: false,
  isDisabled: false,
  onClick: null,
  onRemove: null,
  size: types.MEDIUM,
  tagColor: Tag.types.color.GREY,
};

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;
