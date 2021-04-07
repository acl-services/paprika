export default TextEditor;

declare function TextEditor(props: TextEditorProps): JSX.Element;
interface TextEditorProps {
  [x: string]: any;
  /** TinyMCE Api Key */
  apiKey?: string;
  /** Initial value to be use as uncontrolled component */
  defaultValue?: string;
  /** controls the height of the text editor */
  height?: number;
  /** Dictate if the text editor can be edit or not */
  isDisabled?: boolean;
  /** Reports the latest change on the TextEditor on HTML Format */
  onChange?: (...args: any[]) => any;
  /** value when the text editor is used as a controlled component */
  value?: string;
  /** predefined toolbar and plugins for the text editor */
  kind?: string;
  /** required only if you are extending the editor */
  children?: React.ReactNode;
}

declare namespace TextEditor {
  function Tiny(props: TinyProps): JSX.Element;
  interface TinyProps {
    [x: string]: any;
    /** this object can be any of the configuration options support by TinyMCE https://www.tiny.cloud/docs/configure/ */
    init: shape;
  }
}
