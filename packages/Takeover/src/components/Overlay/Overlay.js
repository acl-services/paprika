import React from "react";
import OriginalOverlay from "@paprika/overlay";

// The public composition API intentionally mirrors Overlay's prop types.
// eslint-disable-next-line react/forbid-foreign-prop-types
const propTypes = OriginalOverlay.propTypes;

const defaultProps = {};

const Overlay = () => <></>;

Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;
Overlay.displayName = "Takeover.Overlay";

export default Overlay;
