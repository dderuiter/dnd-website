import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

    activeTabNum: number;

    constructor() { }

    ngOnInit() {
        this.activeTabNum = 0;
    }

    showTab(tabNum) {
        this.activeTabNum = tabNum;
    }
}
