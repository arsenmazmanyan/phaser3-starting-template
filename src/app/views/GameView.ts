export class GameView extends Phaser.GameObjects.Container {
    public constructor(public scene) {
        super(scene);
        this.init();
    }

    private init(): void {
        const spine = this.scene.add.spine(800, 800, "thief");
        spine.play("Running", true);
    }
}
