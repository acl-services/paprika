export default Uploader;

declare function Uploader(props: UploaderProps): JSX.Element;
interface UploaderProps {
  [x: string]: any;
  /** Accessible message for the input[type="file"]. */
  a11yText?: string;
  /** An array of string describing the allowed file types for the uploader. */
  supportedMimeTypes?: string[];
  /** When false the uploader only accept one file per upload. */
  canChooseMultiple?: boolean;
  /** children nodes */
  children: React.ReactNode;
  /** initial disable state for the uploader */
  defaultIsDisabled?: boolean;
  /** The url that will be use to upload the files. */
  endpoint: string;
  /** On true will upload the file as soon they are selected or dropped */
  hasAutoUpload?: boolean;
  /** When true the user will be able to drop files at any part of the document.body. On false will only receive files dropped exactly on the FileInput area. */
  isBodyDroppable?: boolean;
  /** Size in Mebibytes which is used for comparing each file that will be uploaded. */
  maxFileSize?: number;
  /** This callback fires every time a file has been processed */
  onChange?: (...args: any[]) => any;
  /** Will fire once all files have been processed with the files as parameter. */
  onCompleted?: (...args: any[]) => any;
  /** you can pass an array of header objects. */
  headers?: object[];
}
