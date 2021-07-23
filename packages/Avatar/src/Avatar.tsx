import React from "react";
// @ts-expect-error: need to fix constants library
import * as constants from "@paprika/constants/lib/Constants";
import * as sc from "./Avatar.styles";

interface AvatarProps {
  children?: React.ReactNode | null;
  backgroundColor?: string | null;
  color?: string | null;
  isRound?: boolean;
  // size?: Avatar.types.size.SMALL | Avatar.types.size.MEDIUM | Avatar.types.size.LARGE;
  [x: string]: any;
}

function Avatar(props: AvatarProps): JSX.Element {
  const { backgroundColor = null, size, color = null, children = null, isRound = false, ...moreProps } = props;

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

// const propTypes = {
//   /** Avatar content. It can be initial as a string or icon */
//   children: PropTypes.node,
//   /** Background color of the Avatar */
//   backgroundColor: PropTypes.string,
//   /** Color for the initial or icon */
//   color: PropTypes.string,
//   /** Shape of the Avatar */
//   isRound: PropTypes.bool,
//   /** Size of Avatar */
//   size: PropTypes.oneOf([
//     Avatar.types.size.SMALL, // for use with isRound only
//     Avatar.types.size.MEDIUM,
//     Avatar.types.size.LARGE,
//   ]),
// };

// const defaultProps = {
//   backgroundColor: null,
//   children: null,
//   color: null,
//   isRound: false,
//   size: Avatar.types.size.LARGE,
// };

Avatar.displayName = "Avatar";
// Avatar.propTypes = propTypes;
// Avatar.defaultProps = defaultProps;
export default Avatar;
