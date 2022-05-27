import { StateConfig } from "../configs/NinePatchButtonConfig";
import { ButtonStateNames } from "../enums/ButtonStateNames";
import { ButtonBase } from "./ButtonBase";
import { ButtonState } from "./ButtonState";

export class NinePatchButton extends ButtonBase {
    protected initState(stateConfig: StateConfig, stateName: ButtonStateNames): ButtonState {
        const state = new ButtonState(this.scene, stateConfig, stateName);
        this.add(state);
        return state;
    }
}
