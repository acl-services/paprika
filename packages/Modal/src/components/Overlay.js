import PropTypes from "prop-types";

const propTypes = {
  backdropClassName: PropTypes.string,
  children: PropTypes.func,

  /** container of the Overlay element */
  container: PropTypes.node,

  focusLockOptions: PropTypes.shape({
    // properties copy from https://github.com/theKashey/react-focus-lock/blob/dee9b4c625eba0ca183fbda89005a5d09053086f/src/Lock.js#L160
    // see description for props here: https://github.com/theKashey/react-focus-lock/blob/dee9b4c625eba0ca183fbda89005a5d09053086f/interfaces.d.ts#L4

    children: PropTypes.node,
    disabled: PropTypes.bool,
    returnFocus: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    noFocusGuards: PropTypes.bool,

    allowTextSelection: PropTypes.bool,
    autoFocus: PropTypes.bool,
    persistentFocus: PropTypes.bool,

    group: PropTypes.string,
    className: PropTypes.string,

    whiteList: PropTypes.func,
    shards: PropTypes.arrayOf(PropTypes.any),

    as: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
    lockProps: PropTypes.object,

    onActivation: PropTypes.func,
    onDeactivation: PropTypes.func,

    sideCar: PropTypes.any,
  }),
  hasBackdrop: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  onAfterOpen: PropTypes.func,
  onAfterClose: PropTypes.func,

  /** z-index of the Overlay wrapper */
  zIndex: PropTypes.number,
};

const defaultProps = {
  backdropClassName: null,
  children: () => {},
  container: null,
  focusLockOptions: {},
  hasBackdrop: true,
  onAfterClose: () => {},
  onAfterOpen: () => {},
  onClose: () => {},
  zIndex: null,
};

const Overlay = () => null;

Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;
Overlay.displayName = "Modal.Overlay";

export default Overlay;
