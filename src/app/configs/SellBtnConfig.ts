import { INinePatchConfig } from "@koreez/phaser3-ninepatch";
import { getSellCheckMarkIconBtnIconConfig } from "./IconConfig";
import { NinePatchButtonConfig } from "./NinePatchButtonConfig";
import { getSellBtnPatchesConfig } from "./NinePatchConfig";
import { getSellBtnTextConfig } from "./TextConfig";

const getSellBtnNinePatchConfig = (state: string, width: number, height: number): INinePatchConfig => {
    return {
        x: 0,
        y: 0,
        width,
        height,
        ...getSellBtnPatchesConfig(state),
    };
};

export function getBuyButtonConfig(): NinePatchButtonConfig {
    const enabledText = getSellBtnTextConfig(true);
    const disabledText = getSellBtnTextConfig(false);
    const icon = getSellCheckMarkIconBtnIconConfig(-72);
    const width = 148;
    const height = 48;
    return {
        states: {
            up: {
                bkg: getSellBtnNinePatchConfig("up", width, height),
                text: enabledText,
                icon,
            },
            over: {
                bkg: getSellBtnNinePatchConfig("over", width, height),
                text: enabledText,
                icon,
            },
            down: {
                bkg: getSellBtnNinePatchConfig("down", width, height),
                text: enabledText,
                icon,
            },
            disabled: {
                bkg: getSellBtnNinePatchConfig("disabled", width, height),
                text: disabledText,
            },
        },
    };
}

export function getSellButtonConfig(): NinePatchButtonConfig {
    const enabledText = getSellBtnTextConfig(true);
    const disabledText = getSellBtnTextConfig(false);
    const icon = getSellCheckMarkIconBtnIconConfig(-140);
    const width = 540;
    const height = 144;
    return {
        states: {
            up: {
                bkg: getSellBtnNinePatchConfig("up", width, height),
                text: enabledText,
                icon,
            },
            over: {
                bkg: getSellBtnNinePatchConfig("over", width, height),
                text: enabledText,
                icon,
            },
            down: {
                bkg: getSellBtnNinePatchConfig("down", width, height),
                text: enabledText,
                icon,
            },
            disabled: {
                bkg: getSellBtnNinePatchConfig("disabled", width, height),
                text: disabledText,
            },
        },
    };
}
