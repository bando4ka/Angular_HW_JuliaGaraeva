import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.scss']
})

export class ClockComponent implements OnInit, OnDestroy{
    public date: Date = new Date();

    public time: Date = new Date();
    private interval: any;

    ngOnInit(): void {
        this.interval = setInterval(() => {
            this.time = new Date();
        }, 1000);
    }

    ngOnDestroy(): void {
        clearInterval(this.interval);
    }
}
