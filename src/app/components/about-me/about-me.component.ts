import { Component, Input, Type } from '@angular/core';
import { AboutMe } from '../../models/about-me-model';
import { AboutMeService } from '../../services/about-me.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})

export class AboutMeComponent {
  @Input() resumeId!: number;
  mode: string = 'prod';
  aboutMe!: AboutMe;

  ngOnInit(): void {
    this.getAboutMeByResumeId(this.resumeId);
  }

  constructor(
    private aboutMeService: AboutMeService
  ) {}

  getAboutMeByResumeId(resumeId: number): void {
    this.aboutMeService.getAboutMeByResumeId(resumeId).subscribe(aboutMe => {
      this.aboutMe = aboutMe;
      if( aboutMe.fullName === '' || aboutMe.jobTitle === '' || aboutMe.introduction === '') {
        this.mode = 'edit';
      }
    });
  }

  save(): void {
    this.aboutMeService.updateAboutMe(this.aboutMe).subscribe();
    this.changeMode();
  }

  changeMode(): void {
    this.mode = this.mode === 'prod' ? 'edit' : 'prod';
  }
}
