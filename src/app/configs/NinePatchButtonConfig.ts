import { TextConfig } from "../interfaces/TextConfig";
import { INinePatchConfig } from "@koreez/phaser3-ninepatch";

export interface SpriteConfig {
    x: number;
    y: number;
    texture: string | Phaser.Textures.Texture;
    frame?: string | number | undefined;
    scaleX?: number;
    scaleY?: number;
}

export interface ButtonHitAreaConfig {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface StateConfig {
    bkg: INinePatchConfig;
    tint?: number;
    text?: TextConfig;
    icon?: SpriteConfig;
}

export interface ButtonStates {
    up: StateConfig;
    over?: StateConfig;
    down?: StateConfig;
    disabled?: StateConfig;
}

export interface NinePatchButtonConfig {
    states: ButtonStates;
    hitArea?: ButtonHitAreaConfig;
}
