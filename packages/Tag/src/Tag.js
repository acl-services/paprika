import React from "react";
import PropTypes from "prop-types";
import Close from "@paprika/icon/lib/Times";
import * as constants from "@paprika/constants/lib/Constants";
import * as sc from "./Tag.styles";
import * as types from "./types";

export function Delete({ size, onRemove = () => {} }) {
  return (
    <sc.Delete size={size} data-pka-anchor="tag.delete" onClick={onRemove}>
      <Close />
    </sc.Delete>
  );
}

Delete.propTypes = {
  onRemove: PropTypes.func.isRequired,
  size: PropTypes.oneOf([types.MEDIUM, types.LARGE]).isRequired,
};

export default function Tag(props) {
  const { children, onRemove, size, hasDeleteButton, ...moreProps } = props;
  const isChildString = typeof children === "string";

  return (
    <sc.Tag data-pka-anchor="tag" {...moreProps}>
      <sc.Ellipsis isChildString={isChildString} size={size}>
        {children}
      </sc.Ellipsis>
      {hasDeleteButton ? <Delete onRemove={onRemove} size={size} /> : null}
    </sc.Tag>
  );
}

Tag.types = {
  size: PropTypes.oneOf([types.MEDIUM, types.LARGE]),
  color: constants.color,
  severity: types.severityTagColors,
};

const propTypes = {
  a11yText: PropTypes.string,
  onRemove: PropTypes.func.isRequired,
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
  size: types.MEDIUM,
  tagColor: Tag.types.color.GREY,
};

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;
