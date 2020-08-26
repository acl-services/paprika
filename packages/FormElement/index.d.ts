export default FormElement;

declare function FormElement(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const children: node;
  const hasOptionalLabel: bool;
  const hasRequiredLabel: bool;
  const id: string;
  const isDisabled: bool;
  const isInline: bool;
  const isLabelVisuallyHidden: bool;
  const label: node;
  const size: ShirtSizes.DEFAULT;
  const hasFieldSet: bool;
  const onClickLabel: func;
}

declare function Content(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const children: [func, node];
  const idForLabel: string;
  const refLabel: custom;
  const ariaDescribedBy: string;
}

declare function Description(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const ariaDescriptionId: string;
  const children: node;
}

declare function Help(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const children: node;
  const triggerA11yText: string;
}

declare function Instructions(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const children: node;
}

declare function Label(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const hasOptionalLabel: bool;
  const hasRequiredLabel: bool;
  const help: node;
  const id: string;
  const isInline: bool;
  const isVisuallyHidden: bool;
  const label: node;
  const hasFieldSet: bool;
  const onClick: func;
}
