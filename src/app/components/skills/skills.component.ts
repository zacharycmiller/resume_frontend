import { Component } from '@angular/core';
import { Skills } from 'src/app/models/skills-model';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills!: Skills[];
  categories: string[] = [];

  ngOnInit(): void {
    this.getSkills();
  }

  constructor(
    private skillsService: SkillsService
  ) {}

  getSkills(): void {
    this.skills = this.skillsService.getSkills();
    this.getSkillCategories();
  }

  getSkillCategories(): void {
    this.skills.forEach( skill => {
      if( !this.categories.includes(skill.category) ) {
        console.log('category ', skill.category, ' not found in categories[]');
        this.categories.push(skill.category)
        console.log(this.categories.toString());
      }
    });
  }

  getSkillsByCategory(category: string): string[] {
    let skillArray: string[] = [];
    this.skills.forEach( skill => {
      if(skill.category === category ) {
        skillArray.push(skill.name);
      }
    });
    return skillArray;
  }

}
