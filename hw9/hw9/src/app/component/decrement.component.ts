import { Component } from '@angular/core';
import store from '../store/store';
import actions from '../store/actions';

@Component({
    selector: 'decrement-component',
    template: `
    <button class="button2" (click) = 'handler()'> - </button>
    `,
})
export class DecrementComponent {
    handler() {
        store.dispatch({type: actions.DECREMENT, payload: 1 });
    }
}
