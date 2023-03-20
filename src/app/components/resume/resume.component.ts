import { Component, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  @Input() resumeId!: number;

  constructor() {}
}
