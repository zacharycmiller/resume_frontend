import { Component, Input, OnInit } from '@angular/core';
import { Skill, SkillCategory } from 'src/app/models/skills-model';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input() resumeId!: number;
  skills!: Skill[];
  categories: SkillCategory[] = [];
  
  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.getAllSkillsByResumeId(this.resumeId);
    this.categories = Object.values(SkillCategory);
  }

  getAllSkillsByResumeId(resumeId: number): void {
    this.skillsService.getAllSkillsByResumeId(resumeId)
      .subscribe((skills: Skill[]) => {
        this.skills = skills;
      });
  }

  filteredSkills(category: SkillCategory) {
    return this.skills.filter(skill => skill.category === category);
  }
  
  trackByCategory(index: number, category: SkillCategory) {
    return category;
  }
  
}
