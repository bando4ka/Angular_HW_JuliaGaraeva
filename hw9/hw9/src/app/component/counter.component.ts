import { Component, OnInit } from '@angular/core';
import store from '../store/store';

@Component({
    selector: 'counter-component',
    template: `
        <h2>{{ count }}</h2>
    `
})
export class CounterComponent implements OnInit {
     public count: any = 0;

    public ngOnInit(): void {
        store.subscribe(() => {
            const state: any = store.getState();
            this.count = state.counter;
        });
    }
}
