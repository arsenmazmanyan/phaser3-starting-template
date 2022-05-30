import { INinePatchConfig } from "@koreez/phaser3-ninepatch";
import { getColoredBtnPatchesConfig } from "./NinePatchConfig";
import { getRedBtnTextConfig } from "./TextConfig";
import { ButtonStateNames } from "../enums/ButtonStateNames";

export const getRedBtnNinePatchConfig = (state: string): INinePatchConfig => {
    return {
        x: 0,
        y: 0,
        width: 150,
        height: 100,
        ...getColoredBtnPatchesConfig("red", state),
    };
};

export function getRedButtonConfig(): NinePatchButtonConfig {
    const text = getRedBtnTextConfig();
    return {
        states: {
            up: {
                bkg: getRedBtnNinePatchConfig(ButtonStateNames.Up),
                text,
            },
            down: {
                bkg: getRedBtnNinePatchConfig(ButtonStateNames.Down),
                text,
            },
            over: {
                bkg: getRedBtnNinePatchConfig(ButtonStateNames.Over),
                text,
            },
        },
    };
}

export function getRandomButtonConfig(): NinePatchButtonConfig {
    const text = getRedBtnTextConfig();
    return {
        states: {
            up: {
                bkg: { x: 0, y: 0, texture: "buttons", frame: "bkg.png" },
                text,
            },
            down: {
                bkg: { x: 0, y: 0, texture: "buttons", frame: "bkg.png" },
                text,
            },
            over: {
                bkg: { x: 0, y: 0, texture: "buttons", frame: "bkg.png" },
                text,
            },
        },
    };
}
