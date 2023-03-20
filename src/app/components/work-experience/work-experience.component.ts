import { Component, Input, OnInit } from '@angular/core';
import { WorkExperience } from 'src/app/models/work-experience-model';
import { WorkExperienceService } from 'src/app/services/work-experience-item.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  @Input() resumeId!: number;
  @Input() formSubmitted: boolean = false;
  workExperience!: WorkExperience[];
  addExperience: boolean = false;

  constructor(private workExperienceService: WorkExperienceService) {}

  ngOnInit(): void {
    this.getWorkExperienceByResumeId();
  }

  getWorkExperienceByResumeId(): void {
    this.workExperienceService.getWorkExperienceItemsByResumeId(this.resumeId)
        .subscribe(experience => this.workExperience = experience)
  }

  addExperienceItem(): void {
    this.addExperience = true;
  }
}