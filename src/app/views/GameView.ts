import { IocContext } from "power-di";
import { PopupService } from "../services/PopupService";

export class GameView extends Phaser.GameObjects.Container {
    private popupService = IocContext.DefaultInstance.get(PopupService);
    private bkg: Phaser.GameObjects.Sprite;

    public constructor(public scene) {
        super(scene);
        this.init();
    }

    private init(): void {
        this.initBkg();
    }

    private initBkg(): void {
        const { width, height } = this.scene.scale.gameSize;
        this.bkg = this.scene.add.sprite(width / 2, height / 2, "bkg.jpg");
        this.bkg.setInteractive();
        this.bkg.on(Phaser.Input.Events.POINTER_UP, this.handleBkgClick, this);
        this.add(this.bkg);
    }

    private handleBkgClick(): void {
        this.bkg.disableInteractive();
        this.popupService.showCounterPopup();
        setTimeout(() => {
            this.bkg.setInteractive();
        }, 2000);
    }
}
