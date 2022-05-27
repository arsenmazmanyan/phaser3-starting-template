import { TextConfig } from "../interfaces/TextConfig";

export const getSellBtnTextConfig = (enabled: boolean): TextConfig => {
    return {
        text: enabled ? "Sell!" : "Unavailable",
        style: {
            fontFamily: "Grobold",
            fontSize: enabled ? "32px" : "20px",
            color: enabled ? "#ffffff" : "#BFBFBF",
            stroke: enabled ? "#944D24" : "#282828",
            strokeThickness: 4,
            padding: {
                x: 10,
                y: 10,
            },
            shadow: {
                offsetX: 0,
                offsetY: 4,
                color: enabled ? "#944D24" : "#282828",
                fill: true,
                blur: 0,
            },
        },
        x: 0,
        y: 2,
    };
};
