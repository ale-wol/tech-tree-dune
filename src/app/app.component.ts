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
  corinoArrNodes: TechNode[] = [];
  corinoMilNodes: TechNode[] = [];
  corinoStaNodes: TechNode[] = [];


  constructor(private nodeService: AddNodesService) {
    this.nodeService.parseNodesFromJSONFile("./assets/corrino/economyNodes.json").subscribe(
      (techNodes: TechNode[]) => {
        this.corinoEcoNodes = techNodes;
      },
      (error) => {
        console.error('Error parsing JSON:', error);
      }
    );

    this.nodeService.parseNodesFromJSONFile("./assets/corrino/arrakisNodes.json").subscribe(
      (techNodes: TechNode[]) => {
        this.corinoArrNodes = techNodes;
      },
      (error) => {
        console.error('Error parsing JSON:', error);
      }
    );

    this.nodeService.parseNodesFromJSONFile("./assets/corrino/militaryNodes.json").subscribe(
      (techNodes: TechNode[]) => {
        this.corinoMilNodes = techNodes;
      },
      (error) => {
        console.error('Error parsing JSON:', error);
      }
    );

    this.nodeService.parseNodesFromJSONFile("./assets/corrino/statecraftNodes.json").subscribe(
      (techNodes: TechNode[]) => {
        this.corinoStaNodes = techNodes;
      },
      (error) => {
        console.error('Error parsing JSON:', error);
      }
    );
  }
}
