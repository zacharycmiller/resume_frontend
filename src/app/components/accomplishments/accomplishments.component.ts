import { Component, Input } from '@angular/core';
import { Accomplishment } from 'src/app/models/accomplishment-model';
import { AccomplishmentService } from 'src/app/services/accomplishment.service';



@Component({
  selector: 'app-accomplishments',
  templateUrl: './accomplishments.component.html',
  styleUrls: ['./accomplishments.component.css']
})
export class AccomplishmentsComponent {
  accomplishments: Accomplishment[] = [];
  @Input() company!: string;
  @Input() assignment!: string;


  ngOnInit(): void {
    console.log("calling getAccomplishments with company: ", this.company, " and assignment: ", this.assignment);
    this.getAccomplishments(this.company, this.assignment);
  }

  constructor(
    private accomplishmentService: AccomplishmentService
  ) {}

  getAccomplishments(company: string, assignment: string): void {
    this.accomplishments = this.accomplishmentService.getAccomplishments(company, assignment);
  }
}
