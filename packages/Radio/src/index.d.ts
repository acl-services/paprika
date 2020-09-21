export default Radio;

declare function Radio(props: RadioProps): JSX.Element;
interface RadioProps {
  [x: string]: any;
  /** Used for aria-label on the radio input */
  a11yText?: string;
  /** Used for aria-describedby on the radio input */
  ariaDescribedBy?: string;
  /** Describe if the radio started as selected or not */
  canDeselect?: boolean;
  /** Used for label contents */
  children?: React.ReactNode;

  isChecked?: boolean;
  /** Describe if the radio is disabled or not */
  isDisabled?: boolean;
  /** Describe if the radio started as checked or not */
  defaultIsChecked?: boolean;
  /** Name provided for accessibility */
  name?: string;
  /** onClick provided by parent Group component */
  onClick?: custom;
  /** Size provided by parent Group component */
  size?: Radio.types.size.SMALL | Radio.types.size.MEDIUM | Radio.types.size.LARGE;
  /** Value for tabindex attribute to override the default of 0. */
  tabIndex?: number | string;
  /** Value applied to the input if needed. */
  value?: string;
}
declare namespace Radio {
  function Group(props: GroupProps): JSX.Element;
  interface GroupProps {
    [x: string]: any;
    /** aria-labelledby prop on the containing group element */
    a11yText?: string;
    /** Can deselect any radio */
    canDeselect?: boolean;
    /** The individual radio items. */
    children?: React.ReactNode;
    /** Are all radios disabled */
    isDisabled?: boolean;
    /** On change of radio selection. */
    onChange: (...args: any[]) => any;
    /** The size for all radio components. */
    size?: ShirtSizes.DEFAULT;
  }
}
