import { IocContext } from "power-di";
import { PopupServiceEvents } from "../enums/PopupServiceEvents";
import { CounterPopup } from "../popups/CounterPopup";
import { PopupService } from "../services/PopupService";

export class ForegroundView extends Phaser.GameObjects.Container {
    private modal: Phaser.GameObjects.Sprite;
    private counterPopup: CounterPopup;

    public constructor(scene) {
        super(scene);
        this.init();
    }

    private init(): void {
        this.initModal();
        this.initCounterPopup();
        this.initServices();
    }

    private initCounterPopup(): void {
        const { width, height } = this.scene.scale.gameSize;
        this.counterPopup = new CounterPopup(this.scene);
        this.counterPopup.setPosition(width / 2, height / 2);
        this.counterPopup.on("okBtnClicked", () => {
            this.counterPopup.hide()?.on("complete", () => {
                this.emit("counterPopupClosed");
            });
        });
        this.add(this.counterPopup);
    }

    private initServices(): void {
        this.initPopupService();
    }

    private initPopupService(): void {
        const popupService = IocContext.DefaultInstance.get(PopupService);
        popupService.event$.on(PopupServiceEvents.RoundComplete, (rounds: number) => {
            this.showCounterPopup(rounds);
        });
    }

    private showCounterPopup(rounds: number): void {
        this.counterPopup.show(rounds);
    }

    private initModal(): void {
        const modalTextureName = "ModalBkgImage";
        const { width, height } = this.scene.scale.gameSize;
        const graph = this.scene.make.graphics({
            x: 0,
            y: 0,
            add: false,
        });
        graph.fillStyle(0x000000, 0.4);
        graph.fillRect(0, 0, width, height);
        graph.closePath();
        graph.generateTexture(modalTextureName, width, height);
        graph.destroy();
        this.modal = this.scene.add.sprite(0, 0, modalTextureName);
        this.modal.setOrigin(0);
        this.modal.setInteractive();
        this.modal.setVisible(false);
        this.add(this.modal);
    }
}
