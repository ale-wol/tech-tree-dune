import { Component, Injectable, Input } from '@angular/core';
import { TechNode } from './models/tech-node';
import { AddNodesService } from './add-nodes.service';
import { firstValueFrom } from 'rxjs';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tech-tree-dune';

  gridresponsivecols: number = 1;

  selectedFaction: string = "Corrino";

  corinoEcoNodes: TechNode[] = [];
  corinoArrNodes: TechNode[] = [];
  corinoMilNodes: TechNode[] = [];
  corinoStaNodes: TechNode[] = [];

  atreidesEcoNodes: TechNode[] = [];
  atreidesArrNodes: TechNode[] = [];
  atreidesMilNodes: TechNode[] = [];
  atreidesStaNodes: TechNode[] = [];

  fremenEcoNodes: TechNode[] = [];
  fremenArrNodes: TechNode[] = [];
  fremenMilNodes: TechNode[] = [];
  fremenStaNodes: TechNode[] = [];

  harkEcoNodes: TechNode[] = [];
  harkArrNodes: TechNode[] = [];
  harkMilNodes: TechNode[] = [];
  harkStaNodes: TechNode[] = [];

  smugEcoNodes: TechNode[] = [];
  smugArrNodes: TechNode[] = [];
  smugMilNodes: TechNode[] = [];
  smugStaNodes: TechNode[] = [];

  constructor(private nodeService: AddNodesService, private sharedService: SharedService) {
    /*
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
    );*/

    this.addJsonNodesToList("./assets/corrino/economyNodes.json").then(
      data => (this.corinoEcoNodes = data)
    );
    this.addJsonNodesToList("./assets/corrino/arrakisNodes.json").then(
      data => (this.corinoArrNodes = data)
    );
    this.addJsonNodesToList("./assets/corrino/militaryNodes.json").then(
      data => (this.corinoMilNodes = data)
    );
    this.addJsonNodesToList("./assets/corrino/statecraftNodes.json").then(
      data => (this.corinoStaNodes = data)
    );

    this.addJsonNodesToList("./assets/atreides/economyNodes.json").then(
      data => (this.atreidesEcoNodes = data)
    );
    this.addJsonNodesToList("./assets/atreides/arrakisNodes.json").then(
      data => (this.atreidesArrNodes = data)
    );
    this.addJsonNodesToList("./assets/atreides/militaryNodes.json").then(
      data => (this.atreidesMilNodes = data)
    );
    this.addJsonNodesToList("./assets/atreides/statecraftNodes.json").then(
      data => (this.atreidesStaNodes = data)
    );

    this.addJsonNodesToList("./assets/fremen/economyNodes.json").then(
      data => (this.fremenEcoNodes = data)
    );
    this.addJsonNodesToList("./assets/fremen/arrakisNodes.json").then(
      data => (this.fremenArrNodes = data)
    );
    this.addJsonNodesToList("./assets/fremen/militaryNodes.json").then(
      data => (this.fremenMilNodes = data)
    );
    this.addJsonNodesToList("./assets/fremen/statecraftNodes.json").then(
      data => (this.fremenStaNodes = data)
    );

    this.addJsonNodesToList("./assets/harkonnen/economyNodes.json").then(
      data => (this.harkEcoNodes = data)
    );
    this.addJsonNodesToList("./assets/harkonnen/arrakisNodes.json").then(
      data => (this.harkArrNodes = data)
    );
    this.addJsonNodesToList("./assets/harkonnen/militaryNodes.json").then(
      data => (this.harkMilNodes = data)
    );
    this.addJsonNodesToList("./assets/harkonnen/statecraftNodes.json").then(
      data => (this.harkStaNodes = data)
    );

    this.addJsonNodesToList("./assets/smuggler/economyNodes.json").then(
      data => (this.smugEcoNodes = data)
    );
    this.addJsonNodesToList("./assets/smuggler/arrakisNodes.json").then(
      data => (this.smugArrNodes = data)
    );
    this.addJsonNodesToList("./assets/smuggler/militaryNodes.json").then(
      data => (this.smugMilNodes = data)
    );
    this.addJsonNodesToList("./assets/smuggler/statecraftNodes.json").then(
      data => (this.smugStaNodes = data)
    );
  }

  ngOnInit() {
    this.gridresponsivecols = (window.innerWidth <= 700) ? 1 : 2;
    
    this.sharedService.selectedFaction$.subscribe((faction) => {
      this.selectedFaction = faction;
      // Any other logic you want to perform when the value changes
    });
  }

  handleSize(event: any) {
    this.gridresponsivecols = (event.target.innerWidth <= 700) ? 1 : 2;
  }

  async addJsonNodesToList(filePath: string): Promise<TechNode[]>{
    let arrayToAdd: TechNode[];
    arrayToAdd = await firstValueFrom(this.nodeService.parseNodesFromJSONFile(filePath));
    return arrayToAdd;
  }

}
