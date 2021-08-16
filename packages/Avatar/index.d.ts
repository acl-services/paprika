declare module "helpers" {
    export function getAvatarColors(children: any): {
        fontColor: any;
        backgroundColor: any;
    };
    export function getInitialsFromText(text: any, ...args: any[]): any;
}
declare module "Avatar.styles" {
    export var Avatar: any;
}
declare module "Avatar" {
    export default _default;
    function _default(props: any): any;
    namespace _default {
        namespace types {
            const size: any;
        }
        const displayName: string;
    }
}
declare module "index" {
    export {};
}
