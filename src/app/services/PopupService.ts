import { injectable } from "power-di";
import EventEmitter = Phaser.Events.EventEmitter;

@injectable()
export class PopupService {
    public event$: EventEmitter;
    private popups: Phaser.GameObjects.Container[];

    public initialize(): void {
        this.popups = [];
        this.event$ = new EventEmitter();
        this.attachEvents();
    }

    private attachEvents(): void {
        //
    }
}
