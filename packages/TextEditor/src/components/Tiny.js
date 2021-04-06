import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line no-unused-vars
export default function Tiny(props) {
  // shell component
  return <></>;
}

Tiny.displayName = "TextEditor.Tiny";

Tiny.propTypes = {
  /** this object can be any of the configuration options support by TinyMCE https://www.tiny.cloud/docs/configure/  */
  init: PropTypes.shape({}).isRequired,
};
