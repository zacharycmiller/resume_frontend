import { Component, Input } from '@angular/core';
import { Site } from 'src/app/models/site-model';
import { SitesService } from 'src/app/services/sites.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent {
  @Input() resumeId!: number;
  sites!: Site[];

  ngOnInit(): void {
    this.getSites(this.resumeId);
  }
  
  constructor(
    private siteService: SitesService
  ) {}

  getSites(resumeId: number): void {
    this.siteService.getSitesByResumeId(this.resumeId)
      .subscribe(sites => this.sites = sites);
  }
}
