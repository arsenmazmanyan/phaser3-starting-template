export class ForepartView extends Phaser.GameObjects.Container {
    public constructor(public scene) {
        super(scene);
        this.init();
    }

    private init(): void {
        const spine = this.scene.add.spine(1200, 800, "thief");
        spine.play("Running", true);
    }
}
