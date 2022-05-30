export class GameView extends Phaser.GameObjects.Container {
    private bkg: Phaser.GameObjects.Sprite;
    private racoon: SpineGameObject;

    public constructor(public scene) {
        super(scene);
        this.init();
    }

    private init(): void {
        this.initBkg();
        this.initSpine();
    }

    private initBkg(): void {
        const { width, height } = this.scene.scale.gameSize;
        this.bkg = this.scene.add.sprite(width / 2, height / 2, "bkg");
    }

    private initSpine(): void {
        this.racoon = this.scene.add.spine(400, 1020, "racoon");
        this.racoon.setScale(0.4);
        this.racoon.play("Running", true);

        this.scene.tweens.timeline({
            targets: this.racoon,
            duration: 4500,
            loop: -1,
            tweens: [
                {
                    x: 1800,
                    onComplete: () => {
                        this.emit("lap");
                        this.racoon.scaleX *= -1;
                    },
                },
                {
                    x: 400,
                    onComplete: () => {
                        this.emit("lap");
                        this.racoon.scaleX *= -1;
                    },
                },
            ],
        });
    }
}
