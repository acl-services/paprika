export default FormElement;

declare function FormElement(props: FormElementProps): JSX.Element;
interface FormElementProps {
  [x: string]: any;

  children: React.ReactNode;
  /** Should show is optional text besides the label or not. Will not show if hasRequiredLabel prop is true */
  hasOptionalLabel?: boolean;
  /** Should show is required text besides the label or not. Takes presendence over hasOptionalLabel prop */
  hasRequiredLabel?: boolean;
  /** ID for the child element. */
  id?: string;
  /** Should be disabled or not, default is false. */
  isDisabled?: boolean;
  /** Should label and children be inline or not, default is false. */
  isInline?: boolean;
  /** Should label be hidden, default is false. Note: this is discouraged because of accessibility requirements. */
  isLabelVisuallyHidden?: boolean;
  /** Label text of this field. */
  label: React.ReactNode;
  /** Size of the label, error, help and description (font size, min-height, padding, etc). */
  size?: FormElement.types.size.SMALL | FormElement.types.size.MEDIUM | FormElement.types.size.LARGE;
  /** FormElement contains multiple children so Renders a legend element instead of label. */
  hasFieldSet?: boolean;

  onClickLabel?: (...args: any[]) => any;
}
declare namespace FormElement {
  function Content(props: ContentProps): JSX.Element;
  interface ContentProps {
    [x: string]: any;

    children: func | node;
    /** Sets id for label */
    idForLabel?: string;

    refLabel?: custom;
    /** Used for aria-describedby on the FormElement */
    ariaDescribedBy?: string;
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
    /** If "optional" text should be displayed beside the label */
    hasOptionalLabel: boolean;
    /** If "require" text should be displayed beside the label */
    hasRequiredLabel: boolean;
    /** Help indicator */
    help?: React.ReactNode;
    /** id for the element */
    id?: string;
    /** Should label and children be inline or not */
    isInline: boolean;
    /** Should label be hidden */
    isVisuallyHidden: boolean;
    /** Label text of the input field */
    label: React.ReactNode;
    /** Set if FormElement contains multiple children to render a legend element instead of label */
    hasFieldSet: boolean;

    onClick?: (...args: any[]) => any;
  }
}
