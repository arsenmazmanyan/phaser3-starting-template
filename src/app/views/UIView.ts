import { NinePatchButton } from "../buttons/NinePatchButton";
import { getBlueButtonConfig } from "../configs/BlueBtnConfig";
import { ButtonEvents } from "../enums/ButtonEvents";

export class UIView extends Phaser.GameObjects.Container {
    public constructor(public scene) {
        super(scene);
        this.init();
    }

    private init(): void {
        const btn = new NinePatchButton(this.scene, getBlueButtonConfig());
        btn.setPosition(btn.width / 2 + 200, btn.height / 2 + 100);
        this.add(btn);

        btn.on(ButtonEvents.Up, () => {
            btn.setInteractivity(btn.isDisabled, true);
        });
    }
}
