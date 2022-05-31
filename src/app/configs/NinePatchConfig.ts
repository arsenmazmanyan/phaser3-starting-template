import { INinePatchConfig, NinePatch } from "@koreez/phaser3-ninepatch";

interface AssetPatchesConfig {
    key: string;
    frame?: string | number;
    patchesConfig?: any;
}

export const makeNinePatch = (scene: Phaser.Scene, config: INinePatchConfig): NinePatch => {
    const { x = 0, y = 0, width, height, key, frame, patchesConfig } = config;
    return new NinePatch(scene, x, y, width, height, key, frame, patchesConfig);
};

export const getSellBtnPatchesConfig = (state: string): AssetPatchesConfig => {
    return {
        key: "buttons",
        frame: `sell/${state}.png`,
        patchesConfig: {
            top: 69,
            bottom: 69,
            left: 69,
            right: 69,
        },
    };
};

export const getColoredBtnPatchesConfig = (color: string, state: string): AssetPatchesConfig => {
    return {
        key: "buttons",
        frame: `${color}/${state}.png`,
        patchesConfig: {
            top: 24,
            bottom: 24,
            left: 15,
            right: 15,
        },
    };
};
