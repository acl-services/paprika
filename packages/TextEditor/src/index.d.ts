export default TextEditor;

declare function TextEditor(props: TextEditorProps): JSX.Element;
interface TextEditorProps {
  [x: string]: any;

  apiKey?: string;

  defaultValue?: string;

  height?: number;

  isDisabled?: boolean;

  onChange?: (...args: any[]) => any;

  value?: string;

  kind?: string;
}
