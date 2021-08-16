import React from "react";
// @ts-expect-error: need to fix tokens library
import * as constants from "@paprika/constants";
import * as sc from "./Avatar.styles";

type AvatarSize = constants.defaultSize.SMALL | constants.defaultSize.MEDIUM | constants.defaultSize.LARGE;

interface AvatarProps {
  /** Avatar content. It can be initial as a string or icon */
  children?: React.ReactNode | null;
  /** Background color of the Avatar */
  backgroundColor?: string | null;
  /** Color for the initial or icon */
  color?: string | null;
  /** Shape of the Avatar */
  isRound?: boolean;
  /** Size of Avatar */
  size?: AvatarSize;
  [x: string]: any;
}

function Avatar(props: AvatarProps): JSX.Element {
  const {
    backgroundColor = null,
    size = Avatar.types.size.LARGE,
    color = null,
    children = null,
    isRound = false,
    ...moreProps
  } = props;

  if (!isRound && size === Avatar.types.size.SMALL) {
    console.warn(
      `In @paprika/${Avatar.displayName} component, the size="SMALL" should only be used when isRound={true}`
    );
  }

  const isChildString = typeof children === "string";

  return (
    <sc.Avatar
      data-pka-anchor="avatar"
      $backgroundColor={backgroundColor as string}
      $color={color as string}
      size={size as string}
      isChildString={isChildString as boolean}
      isRound={isRound as boolean}
      {...moreProps}
    >
      {children}
    </sc.Avatar>
  );
}

Avatar.types = {
  size: constants.defaultSize,
};

Avatar.displayName = "Avatar";

export default Avatar;
