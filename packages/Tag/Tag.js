import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import classNames from "classnames";
import { TagStyled, TagBodyStyled, TagBodyTextStyled } from "./Tag.styles";

const propTypes = {
  className: PropTypes.string,
  isDark: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  hasTitle: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onRemove: PropTypes.func,
  size: PropTypes.oneOf(["x-small", "small", "medium", "large"]),
  width: PropTypes.number,
};

const defaultProps = {
  className: null,
  isDark: false,
  isDisabled: false,
  isReadOnly: false,
  hasTitle: false,
  onRemove: () => {},
  size: "medium",
  width: null,
};

class Tag extends React.Component {
  getAriaLabel = () => `Remove ${this.props.label}`; // TODO: i18n

  getWidthStyle = () => {
    const maxWidth = 64;
    const { width } = this.props;
    return width && width > 0 ? { maxWidth: `${Math.max(maxWidth, width)}px` } : null;
  };

  render() {
    const {
      className,
      isDark,
      isDisabled,
      isReadOnly,
      hasTitle,
      label,
      onRemove,
      size,
      width,
      ...moreProps
    } = this.props; // eslint-disable-line

    const rootClasses = classNames(
      "paprika-tag",
      `paprika-tag--${size}`,
      { "is-disabled": isDisabled },
      { "paprika-tag--is-read-only": isReadOnly },
      { "paprika-tag--is-dark": isDark },
      className
    );

    return (
      <TagStyled
        aria-disabled={isDisabled}
        className={rootClasses}
        style={this.getWidthStyle()}
        title={hasTitle ? label : null}
        {...moreProps}
      >
        <TagBodyStyled>
          <TagBodyTextStyled>{label}</TagBodyTextStyled>

          {!isReadOnly && (
            <RawButton
              ariaLabel={this.getAriaLabel()}
              className="paprika-tag__remove"
              isDisabled={isDisabled}
              onClick={onRemove}
              size={size}
              type="minor"
            >
              &times;
            </RawButton>
          )}
        </TagBodyStyled>
      </TagStyled>
    );
  }
}

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

export default Tag;
