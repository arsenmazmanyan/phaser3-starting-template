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

export const getYellowBtn1PatchesConfig = (state: string): AssetPatchesConfig => {
    return {
        key: "buttons",
        frame: `yellow/yellow-btn-1-${state}.png`,
        patchesConfig: {
            top: 19, // Amount of pixels for top
            bottom: 19, // Amount of pixels for bottom
            left: 14, // Amount of pixels for left
            right: 14, // Amount of pixels for right
        },
    };
};

export const getYellowBtn2PatchesConfig = (state: string): AssetPatchesConfig => {
    return {
        key: "buttons",
        frame: `yellow/yellow-btn-2-${state}.png`,
        patchesConfig: {
            top: 33,
            bottom: 33,
            left: 15,
            right: 15,
        },
    };
};

export const getTutorialGreenBtn2PatchesConfig = (state: string): AssetPatchesConfig => {
    return {
        key: "buttons",
        frame: `green/${state}.png`,
        patchesConfig: {
            top: 25,
            bottom: 27,
            left: 17,
            right: 17,
        },
    };
};

export const getTutorialPurpleBtn2PatchesConfig = (state: string): AssetPatchesConfig => {
    return {
        key: "buttons",
        frame: `purple/${state}.png`,
        patchesConfig: {
            top: 25,
            bottom: 27,
            left: 17,
            right: 17,
        },
    };
};

export const getBuyLandBtnPatchesConfig = (state: string): AssetPatchesConfig => {
    return {
        key: "buttons",
        frame: `money-bar/${state}.png`,
        patchesConfig: {
            top: 19,
            bottom: 19,
            left: 9,
            right: 9,
        },
    };
};
export const getDisabledSilverStashBtnPatchesConfig = (): AssetPatchesConfig => {
    return {
        key: "store",
        frame: `disable-silver-box-btn.png`,
        patchesConfig: {
            top: 20,
            bottom: 20,
            left: 11,
            right: 11,
        },
    };
};

const getTutorialBubblePatchesConfig = (): AssetPatchesConfig => {
    return {
        key: "tutorial-speech-bubble",
        patchesConfig: {
            top: 89,
            bottom: 287,
            left: 238,
            right: 140,
        },
    };
};
const getTutorialWeedBkgPatchesConfig = (): AssetPatchesConfig => {
    return {
        key: "tutorial",
        frame: `weed-bkg.png`,
        patchesConfig: {
            top: 78,
            bottom: 78,
            left: 81,
            right: 78,
        },
    };
};
const getGramsHolderBkgPatchesConfig = (): AssetPatchesConfig => {
    return {
        key: "popups",
        frame: `grams-holder.png`,
        patchesConfig: {
            top: 31,
            bottom: 31,
            left: 31,
            right: 31,
        },
    };
};
const getSmallProgressBkgPatchesConfig = (): AssetPatchesConfig => {
    return {
        key: "popups",
        frame: `progress-bkg.png`,
        patchesConfig: {
            top: 17,
            bottom: 17,
            left: 20,
            right: 21,
        },
    };
};

const getBigProgressBkgPatchesConfig = (): AssetPatchesConfig => {
    return {
        key: "game-ui",
        frame: `progress-bar.png`,
        patchesConfig: {
            top: 39,
            bottom: 43,
            left: 45,
            right: 45,
        },
    };
};
const getContractUnavailableBkgPatchesConfig = (): AssetPatchesConfig => {
    return {
        key: "dispensary",
        frame: `contract-bkg-unavailable.png`,
        patchesConfig: {
            top: 29,
            bottom: 38,
            left: 37,
            right: 30,
        },
    };
};
const getNavBarBkgPatchesConfig = (): AssetPatchesConfig => {
    return {
        key: "game-ui",
        frame: `global-nav-bkg.png`,
        patchesConfig: {
            top: 57,
            bottom: 1,
            left: 55,
            right: 55,
        },
    };
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
export const getWanaBuckBkgPatchesConfig = (state: string): AssetPatchesConfig => {
    return {
        key: "store",
        frame: `wana-buck-bkg/${state}.png`,
        patchesConfig: {
            top: 12,
            bottom: 12,
            left: 12,
            right: 12,
        },
    };
};

export const getColoredBtnPatchesConfig = (color: string, state: string): AssetPatchesConfig => {
    const config = {
        key: "buttons",
        frame: `${color}/${state}.png`,
        patchesConfig: {
            top: 23,
            bottom: 23,
            left: 14,
            right: 14,
        },
    };
    if (color === "green" && state === "over") {
        config.patchesConfig.top = 25;
        config.patchesConfig.bottom = 27;
        config.patchesConfig.left = 17;
        config.patchesConfig.right = 17;
    }
    return config;
};

export const getTutorialBubbleNinePatchConfig = (): INinePatchConfig => {
    return {
        x: 0,
        y: 0,
        width: 800,
        height: 600,
        ...getTutorialBubblePatchesConfig(),
    };
};

export const getTutorialWeedBkgNinePatchConfig = (): INinePatchConfig => {
    return {
        x: 0,
        y: 0,
        width: 320,
        height: 320,
        ...getTutorialWeedBkgPatchesConfig(),
    };
};

export const getGramsHolderBkgNinePatchConfig = (): INinePatchConfig => {
    return {
        x: 0,
        y: 0,
        width: 208,
        height: 64,
        ...getGramsHolderBkgPatchesConfig(),
    };
};

export const getProgressBarBkgNinePatchConfig = (width: number, height: number): INinePatchConfig => {
    const config = height > 120 / 3 ? getBigProgressBkgPatchesConfig() : getSmallProgressBkgPatchesConfig();
    return {
        x: 0,
        y: 0,
        width,
        height,
        ...config,
    };
};

export const getContractUnavailableBkgNinePatchConfig = (): INinePatchConfig => {
    return {
        x: 0,
        y: 0,
        width: 365,
        height: 268,
        ...getContractUnavailableBkgPatchesConfig(),
    };
};

export const getNavBarBkgNinePatchConfig = (): INinePatchConfig => {
    return {
        x: 0,
        y: 0,
        width: 569,
        height: 138,
        ...getNavBarBkgPatchesConfig(),
    };
};

export const getWanaBuckCardBkgNinePatchConfig = (): INinePatchConfig => {
    return {
        x: 0,
        y: 0,
        width: 208,
        height: 264,
        ...getWanaBuckBkgPatchesConfig("true"),
    };
};
export const getCancelBtnNinePatchConfig = (color: string, state: string): INinePatchConfig => {
    return {
        x: 0,
        y: 0,
        width: 208,
        height: 68,
        ...getColoredBtnPatchesConfig(color, state),
    };
};

export const getColoredBtnNinePatchConfig = (color: string, state: string): INinePatchConfig => {
    let height = 68;
    let width = 200;
    let y = 0;
    if (color === "green" && state === "over") {
        height = 77;
        width = 210;
        y = 4;
    }
    return {
        x: 0,
        y,
        width,
        height,
        ...getColoredBtnPatchesConfig(color, state),
    };
};
