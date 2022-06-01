import { IocContext } from "power-di";
import { PopupServiceEvents } from "../enums/PopupServiceEvents";
import { PopupService } from "../services/PopupService";

export class GameView extends Phaser.GameObjects.Container {
    private bkg: Phaser.GameObjects.Sprite;
    private racoon: SpineGameObject;
    private popupService: PopupService;

    public constructor(public scene) {
        super(scene);
        this.init();
    }

    public runRacoon(): void {
        this.racoon.play("Running", true);
        this.scene.tweens.timeline({
            targets: this.racoon,
            duration: 4500,
            tweens: [
                {
                    x: 1800,
                    onComplete: () => {
                        this.racoon.scaleX *= -1;
                    },
                },
                {
                    x: 400,
                    onComplete: () => {
                        this.emit("lap");
                        this.racoon.scaleX *= -1;
                        this.racoon.play("Idle", true);
                    },
                },
            ],
        });
    }

    private init(): void {
        this.initBkg();
        this.initSpine();
        this.initServices();
    }

    private initBkg(): void {
        const { width, height } = this.scene.scale.gameSize;
        this.bkg = this.scene.add.sprite(width / 2, height / 2, "bkg.jpg");
    }

    private initSpine(): void {
        this.racoon = this.scene.add.spine(400, 1020, "racoon");
        this.racoon.setScale(0.4);
        this.racoon.play("Idle", true);
        this.racoon.state.data.setMix("Idle", "Running", 1);
        this.racoon.state.data.setMix("Running", "Idle", 1);
        this.runRacoon();
    }

    private initServices(): void {
        this.popupService = IocContext.DefaultInstance.get(PopupService);
        this.popupService.event$.on(PopupServiceEvents.RunRacoon, this.runRacoon, this);
    }
}
