import { EventEmitter } from '@angular/core';

export class Service {
    public arrayPic = new EventEmitter();

    set Data(value) {
        this.arrayPic.emit(value);
    }
}
