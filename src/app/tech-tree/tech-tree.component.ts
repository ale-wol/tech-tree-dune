import { Component, Input } from '@angular/core';
import { TechNode } from '../models/tech-node';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-tech-tree',
  templateUrl: './tech-tree.component.html',
  styleUrls: ['./tech-tree.component.css']
})
export class TechTreeComponent {
  @Input() childs: TechNode[] =[];
  tooltipContent: string="";
  sanitizedTooltipContent: SafeHtml = "";

  constructor(private sanitizer: DomSanitizer) {}

  generateTooltipContent(item: TechNode) {
    let tooltipHTML = '<ul>';
    var perks = item.getPerks();
    for(let i = 0; i < perks.length; i++) {
      tooltipHTML += `<li>` + perks[i] + `</li>`;
    }
    tooltipHTML += '</ul>';
    this.tooltipContent = tooltipHTML;
    this.sanitizedTooltipContent = this.sanitizer.bypassSecurityTrustHtml(tooltipHTML);
  }

}
