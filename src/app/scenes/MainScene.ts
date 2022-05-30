import * as Stats from "stats.js";
import { SceneNames } from "../enums/Scenes";
import { ForegroundView } from "../views/ForegroundView";
import { GameView } from "../views/GameView";
import { UIView } from "../views/UIView";

export default class MainScene extends Phaser.Scene {
    private gameView: GameView;
    private uiView: UIView;
    private foregroundView: ForegroundView;
    public constructor() {
        super({ key: SceneNames.Main });
    }

    private init(): void {
        this.initGameView();
        this.initUIView();
        this.initForegroundView();
        this.initStatJS();
    }

    private initGameView(): void {
        this.gameView = new GameView(this);
        this.gameView.on("lap", () => {
            this.uiView.updateCounter();
        });
        this.add.existing(this.gameView);
    }

    private initUIView(): void {
        this.uiView = new UIView(this);
        this.uiView.on("showPopup", (rounds: number) => {
            this.foregroundView.showPopup(rounds);
        });
        this.add.existing(this.uiView);
    }

    private initForegroundView(): void {
        this.foregroundView = new ForegroundView(this);
        this.add.existing(this.foregroundView);
    }

    private initStatJS(): void {
        const stats = new Stats();
        stats.showPanel(2);
        const update = (): void => {
            stats.begin();
            stats.end();
            requestAnimationFrame(update);
        };
        update();
        document.body.appendChild(stats.dom);
    }
}
