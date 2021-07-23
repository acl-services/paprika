import React from "react";
interface AvatarProps {
    $backgroundColor?: string | null;
    $color: string;
    isChildString: boolean;
    isRound: boolean;
    size: string;
    children: React.ReactNode;
    [x: string]: any;
}
export declare const Avatar: import("styled-components").StyledComponent<"div", any, AvatarProps, never>;
export {};
