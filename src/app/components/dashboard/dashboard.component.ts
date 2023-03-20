import { Component, ViewChildren } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userId: number = 1;
  resumeId!: number;

  constructor(
    private resumeService: ResumeService, 
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    /*
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['id'];
    });
    */
  }
}
