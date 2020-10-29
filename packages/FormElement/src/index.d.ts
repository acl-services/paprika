export default FormElement;

declare function FormElement(props: FormElementProps): JSX.Element;
interface FormElementProps {
  [x: string]: any;

  formElementA11yProps?: shape;

  children: React.ReactNode;
  /** Should be disabled or not, default is false. */
  isDisabled?: boolean;
  /** Should label and children be inline or not, default is false. */
  isInline?: boolean;
  /** Size of the label, error, help and description (font size, min-height, padding, etc). */
  size?: FormElement.types.size.SMALL | FormElement.types.size.MEDIUM | FormElement.types.size.LARGE;
  /** FormElement contains multiple children so Renders a legend element instead of label. */
  hasFieldSet?: boolean;
}

declare namespace FormElement {
  function Content(props: ContentProps): JSX.Element;
  interface ContentProps {
    [x: string]: any;

    children: func | node;

    isInline?: boolean;
  }
}
declare namespace FormElement {
  function Description(props: DescriptionProps): JSX.Element;
  interface DescriptionProps {
    [x: string]: any;

    ariaDescriptionId?: string;

    children: React.ReactNode;
  }
}
declare namespace FormElement {
  function Help(props: HelpProps): JSX.Element;
  interface HelpProps {
    [x: string]: any;

    children: React.ReactNode;
    /** Aria text for information button to trigger help popover. */
    triggerA11yText?: string;
  }
}
declare namespace FormElement {
  function Instructions(props: InstructionsProps): JSX.Element;
  interface InstructionsProps {
    [x: string]: any;

    children: React.ReactNode;
  }
}
declare namespace FormElement {
  function Label(props: LabelProps): JSX.Element;
  interface LabelProps {
    [x: string]: any;

    children: React.ReactNode;
    /** If "optional" text should be displayed beside the label */
    hasOptionalLabel?: boolean;
    /** If "require" text should be displayed beside the label */
    hasRequiredLabel?: boolean;
    /** Help indicator */
    help?: React.ReactNode;
    /** id for the element */
    id?: string;
    /** Should label be hidden */
    isVisuallyHidden?: boolean;

    onClick?: (...args: any[]) => any;
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
