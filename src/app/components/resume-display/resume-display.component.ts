import { Component, Input } from '@angular/core';
import { Resume } from 'src/app/models/resume-model';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-resume-display',
  templateUrl: './resume-display.component.html',
  styleUrls: ['./resume-display.component.css']
})
export class ResumeDisplayComponent {
  @Input() userId!: number;
  resumes!: Resume[];
  resumeUrl!: string;

  ngOnInit(): void {
    this.getResumes();
  }

  constructor(
    private resumeService: ResumeService
  ) {}

  getResumes(): void {
    this.resumeService.getResumes(this.userId).subscribe( resumes => {
      this.resumes = resumes;
    })
  }

  newResume(userId: number): void {
    this.resumeService.createResume(userId).subscribe( resume => {
      //this.resumeId = resume.resumeId;
    });
  }
}
