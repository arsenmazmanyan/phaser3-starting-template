import { IocContext } from "power-di";
import { PopupServiceEvents } from "../enums/PopupServiceEvents";
import { PopupService } from "../services/PopupService";

export class CounterComponent extends Phaser.GameObjects.Container {
    private bkg: Phaser.GameObjects.Sprite;
    private label: Phaser.GameObjects.Text;
    private rounds = 0;
    private popupService: PopupService;

    public constructor(scene) {
        super(scene);
        this.init();
    }

    public updateRounds(): void {
        this.label.setText(`Laps: ${++this.rounds}`);
        this.popupService.event$.emit(PopupServiceEvents.RoundComplete, this.rounds);
    }

    private init(): void {
        this.initBkg();
        this.initLabel();

        this.popupService = IocContext.DefaultInstance.get(PopupService);
    }

    private initBkg(): void {
        this.bkg = this.scene.add.sprite(0, 0, "game-ui", "counter-bkg.png");
        this.add(this.bkg);
    }

    private initLabel(): void {
        this.label = this.scene.add.text(-170, -5, `Laps: ${this.rounds}`, {
            fontSize: "40px",
        });
        this.label.setOrigin(0, 0.5);
        this.add(this.label);
    }
}
