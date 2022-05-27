import * as Stats from "stats.js";
import { SceneNames } from "../enums/Scenes";
import { ForepartView } from "../views/ForepartView";
import { GameView } from "../views/GameView";
import { UIView } from "../views/UIView";

export default class MainScene extends Phaser.Scene {
    private gameView: GameView;
    private uiView: UIView;
    private forepartView: ForepartView;
    public constructor() {
        super({ key: SceneNames.Main });
        // this.init();
    }

    private init(): void {
        this.add.existing((this.gameView = new GameView(this)));
        this.add.existing((this.uiView = new UIView(this)));
        this.add.existing((this.forepartView = new ForepartView(this)));
        this.initStatJS();
    }

    private initStatJS(): void {
        const stats = new Stats();
        stats.showPanel(0);
        const update = (): void => {
            stats.begin();
            stats.end();
            requestAnimationFrame(update);
        };
        update();
        document.body.appendChild(stats.dom);
    }
}
