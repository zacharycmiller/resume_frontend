import { Component, Input } from '@angular/core';
import { AboutMe } from '../../models/about-me-model';
import { AboutMeService } from '../../services/about-me.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})

export class AboutMeComponent {
  @Input() id!: number;
  aboutMe!: AboutMe;

  ngOnInit(): void {
    this.getAboutMe(this.id);
  }

  constructor(
    private aboutMeService: AboutMeService
  ) {}

  getAboutMe(id: number): void {
    this.aboutMeService.getAboutMeById(id)
      .subscribe(aboutMe => this.aboutMe = aboutMe);
  }
}
