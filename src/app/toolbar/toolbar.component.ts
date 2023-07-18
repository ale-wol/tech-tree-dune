import { Component, Input } from '@angular/core';
import { SharedService } from '../shared.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Input() selectedFaction: string ="";
  svgContent: SafeHtml | undefined;

  constructor(private sharedService: SharedService, private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.http
      .get('assets/img/dune_spice_wars2.svg', { responseType: 'text' })
      .subscribe((data) => {
        this.svgContent = this.sanitizer.bypassSecurityTrustHtml(data);
      });
  }

  selectFaction(faction: string) {
    this.sharedService.updateSelectedFaction(faction);
    console.log('Selected faction:', faction);
  }
}
