export default FormElement;

declare function FormElement(props: FormElementProps): JSX.Element;
interface FormElementProps {
  [x: string]: any;
  /** FormElement sub components and layout elements. */
  children: React.ReactNode;
  /** FormElement contains multiple children so Renders a legend element instead of label. */
  hasFieldSet?: boolean;
  /** id attribute for the input field DOM element (will be auto-generated if not supplied). */
  id?: string;
  /** Should be disabled or not, default is false. */
  isDisabled?: boolean;
  /** If input is an optional field and should be indicated. */
  isOptional?: boolean;
  /** If input is a required field. */
  isRequired?: boolean;
  /** Size of the label, error, help and description (font size, min-height, padding, etc). */
  size?: FormElement.types.size.SMALL | FormElement.types.size.MEDIUM | FormElement.types.size.LARGE;
}

declare namespace FormElement {
  function Content(props: ContentProps): JSX.Element;
  interface ContentProps {
    [x: string]: any;
    /** Input field and layout elements. May be a render function with a11yProps object and refLabel.
a11yProps includes: { id, disabled?, "aria-disabled"?, "aria-describedby"?, "aria-required"? }
refLabel is a React ref for the `<FormElement.Label />` */
    children: func | node;
  }
}
declare namespace FormElement {
  function Description(props: DescriptionProps): JSX.Element;
  interface DescriptionProps {
    [x: string]: any;
    /** Content for the form element description */
    children?: React.ReactNode;
  }
}
declare namespace FormElement {
  function Error(props: ErrorProps): JSX.Element;
  interface ErrorProps {
    [x: string]: any;
    /** Content of the error message */
    children?: React.ReactNode;

    size?: custom;
  }
}
declare namespace FormElement {
  function Instructions(props: InstructionsProps): JSX.Element;
  interface InstructionsProps {
    [x: string]: any;
    /** Content for the form element instructions */
    children?: React.ReactNode;
  }
}
declare namespace FormElement {
  function Label(props: LabelProps): JSX.Element;
  interface LabelProps {
    [x: string]: any;
    /** content for the label */
    children: React.ReactNode;
    /** Help indicator */
    help?: React.ReactNode;
    /** Aria label for icon button that triggers help popover */
    helpA11yText?: string;
    /** If the label should be dimmed and the help popover disabled */
    isDisabled?: boolean;
    /** Should label be hidden */
    isVisuallyHidden?: boolean;
    /** change tooltip  alignment */
    helpAlign?:
      | Popover.types.align.TOP
      | Popover.types.align.RIGHT
      | Popover.types.align.BOTTOM
      | Popover.types.align.LEFT;
  }
}
declare namespace FormElement {
  function Layout(props: LayoutProps): JSX.Element;
  interface LayoutProps {
    [x: string]: any;
    /** Content of the flex parent */
    children?: React.ReactNode;
  }
}

declare namespace FormElement {
  namespace types {
    namespace size {
      const SMALL: any;
      const MEDIUM: any;
      const LARGE: any;
    }
  }
}
declare namespace Popover {
  namespace types {
    namespace align {
      const TOP: any;
      const RIGHT: any;
      const BOTTOM: any;
      const LEFT: any;
    }
  }
}
