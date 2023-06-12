import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Input() selectedFaction: string = "";

  selectFaction(faction: string) {
    this.selectedFaction = faction;
    console.log('Selected faction:', faction);
  }
}
