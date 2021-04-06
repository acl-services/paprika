import React from "react";
import PropTypes from "prop-types";
import { extractChildren } from "@paprika/helpers";
import { Editor } from "@tinymce/tinymce-react";
import { kind as kindType } from "./types";
import Tiny from "./components/Tiny";

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
  const { height, isDisabled, apiKey, onChange, value, defaultValue, kind, children } = props;
  const { "TextEditor.Tiny": tiny } = extractChildren(children, ["TextEditor.Tiny"]);

  if (value && defaultValue) {
    throw Error("The component can only accept a value or a defaultValue prop, not both");
  }

  if (typeof value !== "string" && typeof defaultValue !== "string") {
    throw Error("The TextEditor is required to have either the `value` or `defaultValue` prop as a string");
  }

  const valueFromProps = value ? { value } : { initialValue: defaultValue };

  const toolbar = getToolbar(kind);
  const plugins = getPlugins(kind);

  const initExtended = (tiny?.props && tiny.props?.init) || {};

  return (
    <Editor
      {...valueFromProps}
      apiKey={apiKey}
      disabled={isDisabled}
      init={{
        plugins,
        toolbar,
        menubar: false,
        statusbar: false,
        branding: false,
        contextmenu: false,
        height,
        ...initExtended,
        // protecting a11y from be override
        a11y_advanced_options: true,
        a11ychecker_html_version: "html5",
        a11ychecker_level: "aa",
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
  children: PropTypes.node,
};

TextEditor.defaultProps = {
  apiKey: "no-api-key",
  defaultValue: null,
  height: 240,
  isDisabled: false,
  kind: kindType.SIMPLE,
  onChange: () => {},
  value: null,
  children: undefined,
};

TextEditor.types = {
  kind: kindType,
};

TextEditor.Tiny = Tiny;
