import React from "react";
import PropTypes from "prop-types";
import { extractChildren } from "@paprika/helpers";
import { Editor } from "@tinymce/tinymce-react";
import { kind as kindType } from "./types";
import Tiny from "./components/Tiny";
import * as simpleConfig from "./config/simple.config";
import * as advancedConfig from "./config/advanced.config";

const propTypes = {
  /** TinyMCE Api Key */
  apiKey: PropTypes.string,
  /** Initial value to be use as uncontrolled component */
  defaultValue: PropTypes.string,
  /** controls the height of the text editor */
  height: PropTypes.number,
  /** Dictate if the text editor can be edit or not */
  isDisabled: PropTypes.bool,
  /** Reports the latest change on the TextEditor on HTML Format */
  onChange: PropTypes.func,
  /** value when the text editor is used as a controlled component */
  value: PropTypes.string,
  /** predefined toolbar and plugins for the text editor */
  kind: PropTypes.string,
  /** required only if you are extending the editor */
  children: PropTypes.node,
};

const defaultProps = {
  apiKey: "no-api-key",
  defaultValue: null,
  height: 240,
  isDisabled: false,
  kind: kindType.SIMPLE,
  onChange: () => {},
  value: null,
  children: undefined,
};

function getPlugins(kind) {
  if (kind === kindType.SIMPLE) {
    return simpleConfig.plugins;
  }
  return advancedConfig.plugins;
}

function getToolbar(paramKind) {
  if (paramKind === kindType.SIMPLE) {
    return simpleConfig.toolbar;
  }
  return advancedConfig.toolbar;
}

export default function TextEditor(props) {
  const { height, isDisabled, apiKey, onChange, value, defaultValue, kind, children } = props;

  // requires to reset the component with newer props due the tinyMCE uncontrolled nature
  const [idKey, setNextIdKey] = React.useState(0);
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

  React.useEffect(() => {
    setNextIdKey(prev => prev + 1);
  }, [kind]);

  return (
    <Editor
      key={idKey}
      {...valueFromProps}
      apiKey={apiKey}
      disabled={isDisabled}
      init={{
        plugins,
        toolbar,
        menubar: false,
        branding: false,
        contextmenu: false,
        height,
        ...initExtended,
        // protecting a11y from be override
        a11y_advanced_options: true,
        a11ychecker_html_version: "html5",
        a11ychecker_level: "aa",
        statusbar: kindType.ADVANCED === kind,
      }}
      onEditorChange={onChange}
    />
  );
}

TextEditor.propTypes = propTypes;
TextEditor.defaultProps = defaultProps;

TextEditor.types = {
  kind: kindType,
};

TextEditor.Tiny = Tiny;
