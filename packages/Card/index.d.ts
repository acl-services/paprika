export default Card;

declare function Card(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const children: node;
  const isFullWidth: bool;
  const isActive: bool;
  const size: ["auto", ShirtSizes.SMALL, ShirtSizes.MEDIUM, ShirtSizes.LARGE];
}

declare function Content(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const children: node;
}

declare function Footer(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const children: node;
}

declare function Header(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const children: node;
}

declare function Metadata(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const children: node;
}

declare function Text(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const children: node;
  const maxTextLength: number;
}

declare function Title(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const children: node;
}
