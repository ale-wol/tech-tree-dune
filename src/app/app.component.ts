import { Component } from '@angular/core';
import { TechNode } from './models/tech-node';
import { AddNodesService } from './add-nodes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tech-tree-dune';
  
  corinoEcoNodes: TechNode[] = [];

  constructor(private nodeService: AddNodesService) {
    this.parseNodesFromJSONFile("./assets/corrino/economyNodes.json");
  }



  parseNodesFromJSONFile(filePath: string): void {
    this.nodeService.parseNodesFromJSONFile(filePath).subscribe(
      (techNodes: TechNode[]) => {
        this.corinoEcoNodes = techNodes;
        console.log(this.corinoEcoNodes);
      },
      (error) => {
        console.error('Error parsing JSON:', error);
      }
    );
  }
}
