export const AlignTypes = {
  TOP: "top",
  RIGHT: "right",
  BOTTOM: "bottom",
  LEFT: "left",
};

AlignTypes.ALL = Object.values(AlignTypes);

export const ShirtSizes = {
  XSMALL: "xsmall",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  XLARGE: "xlarge",
};

ShirtSizes.DEFAULT = [ShirtSizes.SMALL, ShirtSizes.MEDIUM, ShirtSizes.LARGE];
ShirtSizes.LIMITED = [ShirtSizes.SMALL, ShirtSizes.MEDIUM];
ShirtSizes.ALL = Object.values(ShirtSizes);

export const InputValidTypes = {
  EMAIL: "email",
  NUMBER: "number",
  PASSWORD: "password",
  SEARCH: "search",
  TELEPHONE: "tel",
  TEXT: "text",
  URL: "url",
};

InputValidTypes.ALL = Object.values(InputValidTypes);

export const ButtonKinds = {
  DEFAULT: "default",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  DESTRUCTIVE: "destructive",
  FLAT: "flat",
  MINOR: "minor",
  LINK: "link",
};

ButtonKinds.ALL = Object.values(ButtonKinds);

export const SidePanelKinds = {
  DEFAULT: "default",
  CHILD: "child",
};

SidePanelKinds.ALL = Object.values(SidePanelKinds);
