import { Component } from '@angular/core';
import store from '../store/store';
import actions from '../store/actions';

@Component({
    selector: 'reset-component',
    template: `
        <div>
            <button class="button3" (click)="handler()">RESET</button>
        </div>
    `
})

export class ResetCountComponent {
    public handler(): void {
        store.dispatch({ type: actions.RESET });
    }
}
