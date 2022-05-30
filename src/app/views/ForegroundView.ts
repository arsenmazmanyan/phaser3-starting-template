import { CounterPopup } from "../popups/CounterPopup";

export class ForegroundView extends Phaser.GameObjects.Container {
    private modal: Phaser.GameObjects.Sprite;
    private counterPopup: CounterPopup;

    public constructor(scene) {
        super(scene);
        this.init();
    }

    public showPopup(rounds: number): void {
        this.modal.setVisible(true);
        this.showRoundsPopup(rounds);
    }

    private init(): void {
        this.initModal();
        this.initRoundsPopup();
    }

    private showRoundsPopup(rounds: number): void {
        const tw = this.counterPopup.show(rounds);
        tw.on("complete", () => {
            setTimeout(() => {
                this.hideCounterPopup();
            }, 1000);
        });
    }

    private hideCounterPopup(): void {
        const tw = this.counterPopup.hide();
        if (tw) {
            tw.on("complete", () => {
                this.modal.setVisible(false);
            });
        }
    }

    private initRoundsPopup(): void {
        const { width, height } = this.scene.scale.gameSize;
        this.counterPopup = new CounterPopup(this.scene);
        this.counterPopup.setPosition(width / 2, height / 2);
        this.add(this.counterPopup);
    }

    private initModal(): void {
        const modalTextureName = "ModalBkgImage";
        const { width, height } = this.scene.scale.gameSize;
        const graph = this.scene.make.graphics({
            x: 0,
            y: 0,
            add: false,
        });
        graph.fillStyle(0x000000, 0.6);
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
