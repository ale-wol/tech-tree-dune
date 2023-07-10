import { Component, Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Input() selectedFaction: string ="";

  constructor(private sharedService: SharedService) { }

  selectFaction(faction: string) {
    this.sharedService.updateSelectedFaction(faction);
    console.log('Selected faction:', faction);
  }
}
