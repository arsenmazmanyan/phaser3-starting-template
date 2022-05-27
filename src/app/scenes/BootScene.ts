export default class BootScene extends Phaser.Scene {
    public constructor() {
        super({ key: "BootScene" });
    }

    public preload(): void {
        //
    }

    private init(): void {
        console.warn("INITIALIZING BOOT SCENE");

        const { width, height } = this.scale.displaySize;

        const btn = this.add.sprite(0, 0, "buttons", "bkg.png");
        btn.setOrigin(0.5);
        btn.setPosition(width - btn.width / 2, height - btn.height / 2);
        btn.setInteractive();
        btn.on("pointerdown", () => {
            this.scene.start("MainScene");
        });

        const txt = this.add.text(0, 0, "Click this green btn above\nto go to main scene", { fontSize: "42px" });
        txt.setOrigin(0.5);
        txt.setPosition(width - 180, height + 200);
    }

    private create(): void {
        this.scene.start("MainScene");
    }
}
