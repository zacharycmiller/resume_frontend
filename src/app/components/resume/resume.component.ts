import { Component, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  resumeId!: number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params:any) => {
      this.resumeId = params['id'];
    });
  }
}
