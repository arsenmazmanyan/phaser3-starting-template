import { NinePatchButton } from "../buttons/NinePatchButton";
import { getSellButtonConfig } from "../configs/SellBtnConfig";

export default class MainScene extends Phaser.Scene {
    public constructor() {
        super({ key: "MainScene" });
        // this.init();
    }

    private init(): void {
        console.warn("Hello Main SCENE");
        this.add.sprite(200, 150, "buttons", "close_btn_icon.png");
        const spine = this.add.spine(800, 800, "thief");
        spine.play("Running", true);

        const btn = new NinePatchButton(this, getSellButtonConfig());
        btn.setPosition(400, 400);
        this.add.existing(btn);
    }
}
