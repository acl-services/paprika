import React from "react";
import * as constants from "@paprika/constants/lib/Constants";
interface AvatarProps {
    children?: React.ReactNode | null;
    backgroundColor?: string | null;
    color?: string | null;
    isRound?: boolean;
    [x: string]: any;
}
declare function Avatar(props: AvatarProps): JSX.Element;
declare namespace Avatar {
    var types: {
        size: typeof constants.defaultSize;
    };
    var displayName: string;
}
export default Avatar;
