import React from "react";
import PropTypes from "prop-types";
import { callAll, extractChildrenProps } from "@paprika/helpers";
import * as constants from "@paprika/constants/lib/Constants";
import TextareaPropsCollector from "./TextareaPropsCollector";
import * as sc from "./Textarea.styles";

const Textarea = React.forwardRef((props, ref) => {
  const {
    a11yText,
    canExpand,
    children,
    defaultValue,
    hasError,
    isDisabled,
    onChange,
    isReadOnly,
    maxHeight,
    minHeight,
    size,
    value,
    ...moreProps
  } = props;

  const isControlled = value !== undefined;
  const containerProps = extractChildrenProps(children, TextareaPropsCollector);

  const _refTextarea = React.useRef();
  const refTextarea = ref || _refTextarea;

  const handleResize = React.useCallback(() => {
    if (refTextarea.current && refTextarea.current.style) {
      refTextarea.current.style.height = 0;
      refTextarea.current.style.height = `${refTextarea.current.scrollHeight + 2}px`;
    }
  }, [refTextarea]);

  function handleChange() {
    if (canExpand) {
      handleResize();
    }
  }

  React.useLayoutEffect(() => {
    if (canExpand) {
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    return function cleanup() {
      window.removeEventListener("resize", handleResize);
    };
  }, [canExpand, handleResize]);

  React.useLayoutEffect(() => {
    if (canExpand) {
      handleResize();
    }
  }, [canExpand, minHeight, maxHeight, handleResize]);

  const styleProps = {
    hasError,
    isDisabled,
    isReadOnly,
    maxHeight,
    minHeight,
    size,
  };

  return (
    <div data-pka-anchor="textarea.container" {...containerProps}>
      <sc.Textarea
        aria-invalid={hasError}
        aria-label={a11yText}
        data-pka-anchor="textarea"
        defaultValue={!isControlled ? defaultValue : undefined}
        disabled={isDisabled}
        onChange={callAll(handleChange, onChange)}
        readOnly={isReadOnly}
        ref={refTextarea}
        value={isControlled ? value : undefined}
        {...styleProps}
        {...moreProps}
      />
    </div>
  );
});

Textarea.types = {
  size: constants.defaultSize,
};

Textarea.propTypes = {
  /** Provides a non-visible label for this textarea for assistive technologies. */
  a11yText: PropTypes.string,

  /** If true the height will expand automatically to fit content up to the value of maxHeight. */
  canExpand: PropTypes.bool,

  /** Optional Textarea.Container to collect props for root DOM element.  */
  children: PropTypes.node,

  /** Sets the default textarea value for an uncontrolled component. */
  defaultValue: PropTypes.string,

  /** If true displays a red border around textarea to indicate an error. */
  hasError: PropTypes.bool,

  /** If true it makes the textarea disabled. */
  isDisabled: PropTypes.bool,

  /** If true it makes the textarea read only. */
  isReadOnly: PropTypes.bool,

  /** The maximum height of the textarea. */
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** The minimum / default height of the textarea. */
  minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Callback to be executed when the textarea value is changed. Receives the onChange event as an argument. Required when component is controlled. */
  onChange: PropTypes.func,

  /** The size of the textarea input (font size). */
  size: PropTypes.oneOf([Textarea.types.size.SMALL, Textarea.types.size.MEDIUM, Textarea.types.size.LARGE]),

  /** The value inside of the textarea input. Defining this prop will make this a controlled component. Do not use in conjunction with defaultValue. */
  value: PropTypes.string,
};

Textarea.defaultProps = {
  a11yText: null,
  canExpand: true,
  children: null,
  defaultValue: null,
  hasError: false,
  isDisabled: false,
  isReadOnly: false,
  maxHeight: 300,
  minHeight: 80,
  onChange: () => {},
  size: Textarea.types.size.MEDIUM,
  value: undefined,
};

Textarea.displayName = "Textarea";

Textarea.Container = TextareaPropsCollector;

export default Textarea;
