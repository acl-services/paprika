import React from "react";
import * as constants from "@paprika/constants";
declare type AvatarSize = constants.defaultSize.SMALL | constants.defaultSize.MEDIUM | constants.defaultSize.LARGE;
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
declare function Avatar(props: AvatarProps): JSX.Element;
declare namespace Avatar {
    var types: {
        size: any;
    };
    var displayName: string;
}
export default Avatar;
