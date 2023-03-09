import { Component } from '@angular/core';
import { PreviousExperience } from 'src/app/models/previous-experience-model';
import { PreviousExperienceService } from 'src/app/services/previous-experience.service';

@Component({
  selector: 'app-previous-experience',
  templateUrl: './previous-experience.component.html',
  styleUrls: ['./previous-experience.component.css']
})
export class PreviousExperienceComponent {
  previousExperience!: PreviousExperience[];

  ngOnInit(): void {
    this.getPreviousWorkExperience();
  }

  constructor(
    private previousExperienceService: PreviousExperienceService
  ) {}

  getPreviousWorkExperience(): void {
    this.previousExperience = this.previousExperienceService.getPreviousExperience();
  }
}
