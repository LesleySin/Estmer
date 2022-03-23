import EventEmitter from "events";
import BaseService from "../../API/BaseService";

import type { IEventsService } from "../../API/IEventsService";

export class EventsService extends BaseService implements IEventsService {
    private readonly emitter: EventEmitter;

    constructor() {
        super();
        this.emitter = new EventEmitter();
    };

    public addListener(eventKey: string | symbol, listener: (...args: any[]) => void): void {
        this.emitter.addListener(eventKey, listener);
    };

    public removeListener(eventKey: string | symbol, listener: (...args: any[]) => void): void {
        this.emitter.removeListener(eventKey, listener);
    };

    public removeAllListeners(eventKey: string | symbol): void {
        this.emitter.removeAllListeners(eventKey);
    };

    public emit(eventKey: string | symbol, ...args: any[]): void {
        this.emitter.emit(eventKey, ...args);
    };

};