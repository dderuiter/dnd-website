import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

    activeTabNum: number;

    constructor() { }

    ngOnInit() {
        this.activeTabNum = 0;
    }

    showTab(tabNum) {
        this.activeTabNum = tabNum;
    }

}
