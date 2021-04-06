import React from "react";
import PropTypes from "prop-types";
import { Editor } from "@tinymce/tinymce-react";
import { kind as kindType } from "./types";
import * as simpleConfig from "./config/simple.config";

function getPlugins(kind) {
  if (kind === kindType.SIMPLE) {
    return simpleConfig.plugins;
  }
}

function getToolbar(paramKind) {
  if (paramKind === kindType.SIMPLE) {
    return simpleConfig.toolbar;
  }
}

export default function TextEditor(props) {
  const { height, isDisabled, apiKey, onChange, value, defaultValue, kind } = props;

  if (value && defaultValue) {
    throw Error("The component can only accept a value or a defaultValue prop, no both");
  }

  if (!value && !defaultValue) {
    throw Error("The TextEditor require to have at least on prop of type value or defaultValue");
  }

  const valueFromProps = value ? { value } : { initialValue: defaultValue };

  const toolbar = getToolbar(kind);
  const plugins = getPlugins(kind);

  return (
    <Editor
      {...valueFromProps}
      apiKey={apiKey}
      disabled={isDisabled}
      init={{
        a11y_advanced_options: true,
        a11ychecker_html_version: "html5",
        a11ychecker_level: "aa",
        branding: false,
        contextmenu: false,
        height,
        menubar: false,
        plugins,
        statusbar: false,
        toolbar,
      }}
      onEditorChange={onChange}
    />
  );
}

TextEditor.propTypes = {
  apiKey: PropTypes.string,
  defaultValue: PropTypes.string,
  height: PropTypes.number,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  kind: PropTypes.string,
};

TextEditor.defaultProps = {
  apiKey: "no-api-key",
  defaultValue: null,
  height: 320,
  isDisabled: false,
  kind: kindType.SIMPLE,
  onChange: () => {},
  value: null,
};

TextEditor.types = {
  kind: kindType,
};
