import { Component } from '@angular/core';
import { Sites } from 'src/app/models/sites-model';
import { SitesService } from 'src/app/services/sites.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent {
  sites!: Sites;

  ngOnInit(): void {
    this.getSites();
  }
  
  constructor(
    private siteService: SitesService
  ) {}

  getSites(): void {
    this.sites = this.siteService.getSites();
  }
}
