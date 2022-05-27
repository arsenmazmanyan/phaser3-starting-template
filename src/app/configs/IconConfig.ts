import { SpriteConfig } from "./NinePatchButtonConfig";

export const getSolanaBtnIconConfig = (enabled: boolean): SpriteConfig => {
    return {
        texture: "buttons",
        frame: `icons/sol/${enabled ? "enabled" : "disabled"}.png`,
        x: -95,
        y: 0,
    };
};

export const getMoneyIconBtnIconConfig = (
    enabled: boolean,
    x?: number,
    scaleX?: number,
    scaleY?: number,
): SpriteConfig => {
    return {
        texture: "buttons",
        frame: `money-bar/money-${enabled ? "active" : "disabled"}.png`,
        x: x || -100,
        y: 0,
        scaleX: scaleX || 1,
        scaleY: scaleY || scaleX || 1,
    };
};

export const getSellCheckMarkIconBtnIconConfig = (x: number): SpriteConfig => {
    return {
        texture: "buttons",
        frame: `sell-checkmark.png`,
        x,
        y: 0,
    };
};

export const getKeyIconBtnIconConfig = (): SpriteConfig => {
    return {
        texture: "game-ui",
        frame: `key.png`,
        x: -72,
        y: 0,
    };
};
