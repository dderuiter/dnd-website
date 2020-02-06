import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

    languages: Array<Skill>;
    frameworks: Array<Skill>;
    libraries: Array<Skill>;
    databases: Array<Skill>;
    ides: Array<Skill>;
    sourceControl: Array<Skill>;

    constructor(private skillService : SkillService) { }

    ngOnInit() {
        this.skillService.getSkills().subscribe(data => {
            console.log(data);
            this.languages = data["languages"];
            this.frameworks = data["frameworks"];
            this.libraries = data["libraries"];
            this.databases = data["databases"];
            this.ides = data["ides"];
            this.sourceControl = data["sourceControl"];
        });
    }

}
