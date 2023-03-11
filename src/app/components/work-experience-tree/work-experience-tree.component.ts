import { Component, Input } from '@angular/core';

import { WorkExperienceTree } from 'src/app/models/work-experience-tree';
import { WorkExperienceService } from 'src/app/services/work-experience.service';

@Component({
  selector: 'app-work-experience-tree',
  templateUrl: './work-experience-tree.component.html',
  styleUrls: ['./work-experience-tree.component.css']
})
export class WorkExperienceTreeComponent {
  @Input() company!: string;
  item!: WorkExperienceTree;

  ngOnInit(): void {
    this.getWorkExperienceTree();
  }

  constructor(
    private workExperienceService: WorkExperienceService,
  ) {}

  getWorkExperienceTree(): void {
    this.item = this.workExperienceService.getWorkExperienceTree();
  }
}
