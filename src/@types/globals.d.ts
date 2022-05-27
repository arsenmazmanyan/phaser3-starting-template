/// <reference path="../../node_modules/phaser/types/SpineGameObject.d.ts" />
/// <reference path="../../node_modules/phaser/types/SpinePlugin.d.ts" />

declare interface Window {
    SpinePlugin: SpinePlugin;
}

type AssetNameAndPath = {
    name: string;
    path: string;
};

type SpineFiles = {
    key: string;
    jsonURL: string;
    atlasURL: string;
    preMultipliedAlpha?: boolean;
};
